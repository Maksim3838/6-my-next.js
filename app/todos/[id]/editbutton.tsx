"use client"


export default function EditButton() {
    
    const handelclic = () => {
        alert("Edit");
    }


    return (
    <button onClick={handelclic}>Кнопка</button>
)
}