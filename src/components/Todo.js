import React, { useState } from 'react'
import '../stylesheets/todo.css'

export default function Todo({ todo, toggleTodoChecked, removeTodo, setTodoIdToEdit }) {
    const [todoTextStyle, setTodoTextStyle] = useState('todo-val')

    const handleCheckboxClick = e => {
        setTodoTextStyle(todoTextStyle === 'todo-val' ? 'todo-checked' : 'todo-val');
    }

    return (
        <div className='todo'>
            <input type='checkbox'
                className='todo-check'
                onChange={() => toggleTodoChecked(todo.id)}
                onClick={handleCheckboxClick}
            />
            <li className={todoTextStyle}>{todo.text}</li>
            <div className='todo-icon-container'>
                <div className='todo-edit' onClick={() => setTodoIdToEdit(todo.id)}></div>
                <div className='todo-remove' onClick={() => removeTodo(todo.id)}></div>
            </div>
        </div >
    )
}