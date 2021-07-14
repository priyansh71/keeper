import React, { useState } from "react";
import "../styles.css";
import ToDoItem from "./ToDoItem";

export default function Todo() {
  let [A, setA] = useState([]);
  const [task, setTask] = useState("");

  const handlechange = (event) => {
    const value = event.target.value;
    setTask(value);
  };
  const handlesubmit = (event) => {
    event.preventDefault();
    setA((prev) => {
      return [...prev, task];
    })
    setTask("");
  };

 const handleremove = (id) =>{
    setA(prev => {
      return prev.filter((task,index) => {
        return index !== id;
    })
  })
  }
  return (
    <div className="container" id="fancyscroll">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <form onSubmit={handlesubmit}>
        <div className="form">
          <input
            spellCheck="false"
            type="text"
            onChange={handlechange}
            value={task}
          />
          <button type="submit" id="Add">
            Add
          </button>
        </div>
      </form>
      <div>
        <ul>
          {A.map((item,index) => (
           <ToDoItem key={index} id={index} text={item} onRemove={handleremove}/>
          ))}
        </ul>
      </div>
    </div>
  );
}
