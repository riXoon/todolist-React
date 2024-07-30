import React, { useState } from 'react';

export default function TodoInput(props) {

    const { handleAddTodos, todoValue, setTodoValue } = props;

    return (
        <div>
            <header>
                <input
                    type="text" 
                    value={todoValue}
                    placeholder='Enter to do...'
                    onChange={(e) => setTodoValue(e.target.value)}
                />
                <button className='addBtn' onClick={() => {handleAddTodos(todoValue) 
                    setTodoValue('')
                }}>
                    Add
                </button>
            </header>
        </div>
    );
}
