import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { useHistory } from "react-router";
import firebase from "../../firebase";
import TodoList from "../Todos/TodoList";

export default function Dashboard() {
  const [error, setError] = useState();
  const [todos, setTodos] = useState([]);
  const { logout, currentUser } = useAuth();
  const history = useHistory();
  const [title, setTitle] = useState("");

  // get data from firebase database
  useEffect(() => {
    const todoRef = firebase.database().ref("Todo");
    todoRef.on("value", (data) => {
      const obj = data.val();
      const arr = [];
      // iterate through database and create an array
      for (const todo in obj) {
        arr.push(obj[todo]);
      }
      setTodos(arr);
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
  const handleSubmit = (e) => {
    e.preventDefault();

    const todoRef = firebase.database().ref("Todo");
    const todo = {
      title,
      compolated: false,
    };
    todoRef.push(todo);
    setTitle("");
  };

  return (
    <div>
      <div className="error">{error}</div>
      <div style={{ textAlign: "end" }}>{currentUser.email}</div>
      <h1>Dashboard</h1>
      <form onSubmit={handleSubmit}>
        <h2>Create TODO</h2>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <button type="submit">Create</button>
      </form>
      <TodoList todos={todos} />
      <div style={{ textAlign: "center" }}>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}
