import React, { forwardRef, useImperativeHandle, useState } from 'react'
import uuid from 'react-uuid';
import '../stylesheets/listInput.css'

const ListInput = ({ addTodo }, ref) => {
    const [todo, setTodo] = useState({
        id: '',
        text: '',
        completed: false
    })

    useImperativeHandle(ref,
        () => ({
            setTodoTextFromOutside: text => {
                setTodo({ ...todo, text: text })
            }
        }));

    const onFormSubmit = e => {
        e.preventDefault();
        if (todo.text.trim() === '') return;

        console.log(`submitted: ${todo.text}`);

        addTodo({ ...todo, id: uuid() });

        setTodo({ ...todo, text: '' })
    }

    const onInputChanged = e => {
        setTodo({ ...todo, text: e.target.value });
    }

    return (
        <form className='list-input-form' onSubmit={onFormSubmit}>
            <div className='input-container'>
                <input className='input-normal'
                    type='text'
                    placeholder='Add Todo'
                    value={todo.text}
                    onChange={onInputChanged}
                />
                <button type='submit'>Add</button>
            </div>
        </form>
    )
}

export default forwardRef(ListInput);