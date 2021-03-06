import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { useHistory } from "react-router";
import {database} from "../../firebase";
import TodoList from "../Todos/TodoList";
import NewTodo from "../Todos/NewTodo";
import Header from '../header/Header'

export default function Dashboard() {
  const [error, setError] = useState();
  const [todoList, setTodosList] = useState([]);
  const { logout, currentUser } = useAuth();
  const history = useHistory();

  // get data from firebase database
  useEffect(() => {
    const todoRef = database.ref("Todo");
    todoRef.on("value", (data) => {
      const todos = data.val();
      const arr = [];
      // iterate through database and create an array
      for (const id in todos) {
        arr.push({ id, ...todos[id] });
      }
      setTodosList(arr);
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
    const todoRef = database.ref("Todo");
    todoRef.push(todo);
  };

  const deleteTodoHandler = (id) => {
    const todoRef = database.ref("Todo").child(id);
    todoRef.remove();
  };

  const updateTodohandler = (todo) => {
    const todoRef = database.ref("Todo").child(todo.id);
    todoRef.update({
      completed: !todo.completed
    });
  };

  return (
    <div>
      <div className="error">{error}</div>
     <Header currentUser={currentUser} handleLogout={handleLogout}/>
      <h1>Dashboard</h1>
      <NewTodo addTodoHandler={addTodoHandler} />
      <TodoList
        todos={todoList}
        deleteTodoHandler={deleteTodoHandler}
        updateTodohandler={updateTodohandler}
      />
     
    </div>
  );
}
