import React from 'react'
import '../stylesheets/todo.css'
import Todo from './Todo'

export default function TodoList({ todos, toggleTodoChecked, removeTodo, setTodoIdToEdit }) {
    return (
        <div className='todo-list'>
            {(todos === null || todos.length === 0) && <div>TodoList</div>}
            {todos !== null && todos.length > 0 &&
                <ul>
                    {todos.map(todo => (
                        <Todo key={todo.id}
                            todo={todo}
                            toggleTodoChecked={toggleTodoChecked}
                            removeTodo={removeTodo}
                            setTodoIdToEdit={setTodoIdToEdit}
                        />
                    ))}
                </ul>
            }
        </div>
    )
}