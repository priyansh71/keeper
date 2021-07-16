import React, { useState } from "react";

const ToDoItem = (props) => {
    const [done, setDone] = useState(false)

    const handledone = () => {
        setDone((prev) => !prev)
    }
return (
    <li className="sm:text-centerrelative mb-4 md:mx-1 lg:-mx-4 " >
        <span style={{ textDecoration : done ? "line-through" : "none"}} className="mx-3"> {props.text}</span>
        <span>
    <button onClick={handledone}  id="done" >        
    <i class="fas fa-check"></i>
    </button>
    <button onClick={ () => 
        {props.onRemove(props.id);
        }} id="remove"><i class="far fa-trash-alt"></i>
    </button>
        </span>
    </li>
)}

export default ToDoItem;