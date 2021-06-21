import React from "react";

export default function TodoList({
  todos,
  deleteTodoHandler,
  updateTodohandler,
}) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span>{todo.title} </span>
          <span><b>{todo.completed ? 'finished': 'active'}</b> </span>
          <button onClick={() => updateTodohandler(todo)}>Update</button>
          <button onClick={() => deleteTodoHandler(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
