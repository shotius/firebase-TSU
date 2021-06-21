import React from "react";

export default function TodoList({ todos, deleteTodoHandler }) {
  return (
    <ul>
      {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.title}</span>
            <button onClick={() => deleteTodoHandler(todo.id)}>Delete</button>
          </li>
      ))}
    </ul>
  );
}
