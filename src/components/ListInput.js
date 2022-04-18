import React, { useState } from 'react'
import uuid from 'react-uuid';
import '../stylesheets/listInput.css'

export default function ListInput({ addTodo }) {
    const [todo, setTodo] = useState({
        id: '',
        text: '',
        completed: false
    })
    const [inputStyle, setInputStyle] = useState('input-normal');

    const onFormSubmit = e => {
        e.preventDefault();
        console.log(`submitted: ${todo.text}`);
        if (todo.text.trim() === '') {
            setInputStyle('input-error');
            return;
        }
        else {
            if (inputStyle !== 'input-normal')
                setInputStyle('input-normal');
        }

        addTodo({ ...todo, id: uuid() });

        setTodo({ ...todo, text: '' })
    }

    const onInputChanged = e => {
        setTodo({ ...todo, text: e.target.value });
    }

    return (
        <form className='list-input-form' onSubmit={onFormSubmit}>
            <input className={inputStyle}
                type="text"
                placeholder="Add Todo"
                value={todo.text}
                onChange={onInputChanged}
            />
            <button type='submit'>Add</button>
        </form>
    )
}