import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {

const { todos, handleEditTodos, handleDeleteTodos} = props

  return (
    <ul>
        {todos.map((todo, todoIndex) => {
            return (
            <TodoCard {...props} key = {todoIndex} 
            index ={todoIndex}
            handleEditTodos = {handleEditTodos}
            handleDeleteTodos = {handleDeleteTodos}>
                <p>{todo}</p>
            </TodoCard>
             )
        })}
    </ul>
  )
}
