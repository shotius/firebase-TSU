import React from "react";
import './todosList.css'

export default function TodoList({
  todos,
  deleteTodoHandler,
  updateTodohandler,
}) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span className={`fb-40 ${todo.completed ? 'todo-done': ''}`} >{todo.title} </span>
          <span ><b>{todo.completed ? 'finished': 'active'}</b> </span>
          <span>
          <button onClick={() => updateTodohandler(todo)} className="m10">{todo.completed ? 'make active' : 'Done'}</button>
          <button onClick={() => deleteTodoHandler(todo.id)} className="m10">Delete</button>
          </span>
        </li>
      ))}
    </ul>
  );
}
