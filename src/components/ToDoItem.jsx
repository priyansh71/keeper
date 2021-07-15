import React, { useState } from "react";

const ToDoItem = (props) => {
    const [done, setDone] = useState(false)

    const handledone = () => {
        setDone((prev) => !prev)
    }
return (
<div className="list" >
    <li>
        <span style={{ textDecoration : done ? "line-through" : "none"}}> {props.text}</span>
        <span>
    <button onClick={ () => 
        {props.onRemove(props.id);
        }} id="remove">✘
    </button>
    <button onClick={handledone}  id="done" >✓
    </button>
        </span>
    </li>
</div>
)}

export default ToDoItem;