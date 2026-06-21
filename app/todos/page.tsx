import{getTodos} from "@/app/services/todos"
import Link  from "next/link"

export default async function Todos() {
    const todos = await getTodos();
   
    return (
        <div>
            <h1>Todos</h1>
            <ul style={{paddingInline: "50px", listStyleType: "suare" }}>
                {todos.map(todo => (
                    <li key={todo.id}>
                       <Link href={`/todos/${todo.id}`}>{todo.title}</Link> 
                    </li>
                ))}
            </ul>
        </div>
        
    )
}