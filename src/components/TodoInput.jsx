import React, { useState } from 'react';

export default function TodoInput(props) {

    const { handleAddTodos, todoValue, setTodoValue } = props;

    return (
        <>
        <div className="topBg"></div>
        <div className='inputContainer'>
            <div className="title">
             <h1>TODO - LIST</h1>
            </div>
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
                    <i class="fa-solid fa-plus icon"></i>
                </button>
            </header>
        </div>
        </>
    );
}
