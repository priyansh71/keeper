import React, { useState } from "react";

const ToDoItem = (props) => {
    const [done, setdone] = useState(false)

    const handledone = () => {
        setdone((prev) => !prev)
    }
return (
    <div className="list" >
    <li>
       <span style={{ textDecoration : done ? "line-through" : "none"}}> {props.text}</span>
    <button onClick={ () => 
    {props.onRemove(props.id);
    }} id="remove">✘</button>
    <button onClick={handledone}  id="done" >✓</button>
        </li>
  </div>
)}

export default ToDoItem;