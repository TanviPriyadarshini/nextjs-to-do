import { TodoList } from '@/components/TodoList'
import db from '@/utils/db'

const getTodos = async () => {
    let todos = await db.todo.findMany({})
    return todos
}

const TodosPage = async () => {
    const todos = await getTodos();
    return (
        <div><TodoList todos={todos} /></div>
    )
}
export default TodosPage