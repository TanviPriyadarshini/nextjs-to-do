import React from 'react'
import { Todo } from './Todo'

export const TodoList = ({ todos }) => {
    return (
        <div>{todos.map((todo, i) => (<Todo key={i} todo={todo} />))}</div>
    )
}
