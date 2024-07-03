import { NewTodoForm } from "@/components/NewTodoForm"

const DashboardLayout = ({ children }) => {
    return (
        <div className="flex min-h-screen flex-col items-start justify-start px-12 py-6">
            <h1 className="text-md font-extrabold text-black my-2">Today</h1>
            <div>{children}</div>
            <div><NewTodoForm /></div>
        </div>
    )
}
export default DashboardLayout