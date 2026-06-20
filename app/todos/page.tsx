import{getTodos} from "@/app/services/todos"


export default async function Todos() {
    const todos = await getTodos();
   
    return (
        <div>
            <h1>Todos</h1>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <p>{todo.title}</p>
                    </li>
                ))}
            </ul>
        </div>
        
    )
}