import React from 'react'

export default function TodoList({ todos }) {
    return (
        <ul>
            {todos.map((todo, i) => (
                <li key={i}>{todo.title}</li>
            ))}
        </ul>
    )
}
