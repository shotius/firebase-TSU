import React, { useState } from "react";

export default function NewTodo({ addTodoHandler }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = {
      title,
      compolated: false,
    };
    addTodoHandler(todo);
    setTitle("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* <h2>Create TODO</h2> */}
        <div className="form-control">
          <label htmlFor="todo-text">New Todo</label>
          <input
            id="todo-text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
