import React, { useState } from 'react'
import '../stylesheets/todo.css'

export default function Todo({ todo, toggleTodoChecked, removeTodo }) {
    const [todoTextStyle, setTodoTextStyle] = useState('todo-val')

    const handleCheckboxClick = e => {
        setTodoTextStyle(todoTextStyle === 'todo-val' ? 'todo-val todo-checked' : 'todo-val');
    }

    return (
        <div className='todo'>
            <input type='checkbox'
                className='todo-check'
                onChange={() => toggleTodoChecked(todo.id)}
                onClick={handleCheckboxClick}
            />
            <li className={todoTextStyle}>{todo.text}</li>
            <button className='todo-edit'>Edit</button>
            <button className='todo-remove' onClick={() => removeTodo(todo.id)}>Remove</button>
        </div >
    )
}