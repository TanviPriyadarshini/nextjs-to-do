'use client'

import { completeTodo } from '@/utils/actions'
import React, { useTransition } from 'react'

export const Todo = ({ todo }) => {
    const [isPending, startTransition] = useTransition()


    return (
        <div onClick={() => startTransition(() => completeTodo(todo.id))}
            className={`cursor-pointer text-sm ${todo.completed ? `line-through text-gray-700` : ``}`}>
            {todo.content}
        </div>
    )
}
