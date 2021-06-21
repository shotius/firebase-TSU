import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { useHistory } from "react-router";
import firebase from "../../firebase";
import TodoList from "../Todos/TodoList";
import NewTodo from "../Todos/NewTodo";

export default function Dashboard() {
  const [error, setError] = useState();
  const [todoList, setTodosList] = useState([]);
  const { logout, currentUser } = useAuth();
  const history = useHistory();

  // get data from firebase database
  useEffect(() => {
    const todoRef = firebase.database().ref("Todo");
    todoRef.on("value", (data) => {
      const todos = data.val();
      const arr = [];
      // iterate through database and create an array
      for (const id in todos) {
        arr.push({ id, ...todos[id] });
      }
      setTodosList(arr);
      console.log(arr);
    });
  }, []);

  // firebase handle logout user
  const handleLogout = (e) => {
    e.preventDefault();
    setError("");
    try {
      logout();
      history.push("/login");
    } catch (err) {
      setError(err.message);
    }
  };

  // adding data to firebase database
  const addTodoHandler = (todo) => {
    const todoRef = firebase.database().ref("Todo");
    todoRef.push(todo);
  };

  const deleteTodoHandler = (id) => {
    const todoRef = firebase.database().ref("Todo").child(id);
    todoRef.remove();
  };

  const updateTodohandler = (todo) => {
    const todoRef = firebase.database().ref("Todo").child(todo.id);
    todoRef.update({
      completed: !todo.completed
    });
  };

  return (
    <div>
      <div className="error">{error}</div>
      <div style={{ textAlign: "end" }}>{currentUser.email}</div>
      <h1>Dashboard</h1>
      <NewTodo addTodoHandler={addTodoHandler} />
      <TodoList
        todos={todoList}
        deleteTodoHandler={deleteTodoHandler}
        updateTodohandler={updateTodohandler}
      />
      <div style={{ textAlign: "center" }}>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}
