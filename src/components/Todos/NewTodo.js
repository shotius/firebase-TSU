import React, { useState, useRef } from "react";
import "./newTodo.css";

export default function NewTodo({ addTodoHandler }) {
  const titleRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      title: titleRef.current.value,
      completed: false,
    };

    addTodoHandler(newTodo);
   titleRef.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit} className="new-todo-form">
      <div className="form-control">
        <label htmlFor="todo-text">New Todo</label>
        <input id="todo-text" ref={titleRef} />
      </div>
      <button type="submit">ADD</button>
    </form>
  );
}
