import EditButton from "./editbutton";
import { getTodo } from "@/app/services/todos";

interface TodoProp{
    params: Promise <{id: string }>;
}


export default async function Todo({ params }: TodoProp) {
    const { id } = await params;
    const todo = await getTodo(Number.parseInt(id,10));
    return (
        <div>
            <h1>{todo.title}</h1>
            <p>completed:{todo.completed ? "Yes" : "No"}</p> 
            <EditButton/>
        </div>
        
    )
}