import React, { useState } from 'react'

export default function ListInput() {
    const [value, setValue] = useState('')

    const onFormSubmit = e => {
        e.preventDefault();
        console.log(`submitted: ${value}`);
    }

    const onInputChanged = e => {
        setValue(e.target.value);
    }

    return (
        <form className='list-input-form' onSubmit={onFormSubmit}>
            <input className='list-input'
                type="text"
                placeholder="Add Todo"
                value={value}
                onChange={onInputChanged}
            />
            <button type='submit'>Add</button>
        </form>
    )
}