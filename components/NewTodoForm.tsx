import { createTodo } from '@/utils/actions'

export const NewTodoForm = () => {
    return (
        <div>
            <form action={createTodo}>
                <input name="todo-content" type="text" className="border border-black/25" />
                <button type="submit" className="bg-white text-black">Submit</button>
            </form>
        </div>
    )
}
