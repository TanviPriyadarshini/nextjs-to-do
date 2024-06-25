'use server'

import { revalidatePath } from 'next/cache'
import db from './db'

export const completeTodo = async (id) => {
    const completedTodo = await db.todo.update({
        where: { id },
        data: {
            completed: true
        }
    })

    revalidatePath('./todos')
}

export const createTodo = async (formData) => {
    const newTodo = await db.todo.create({
        data: {
            content: formData.get("todo-content")
        }
    })

    revalidatePath('./todos')

}