import React, { useState } from "react";
import "../styles.css";
import InputArea from "./InputArea";
import ToDoItem from "./ToDoItem";

export default function Todo() {
  let [A, setA] = useState([]);
   
  const handlesubmit = (task) => {
    setA((prev) => {
      return [...prev, task];
    })

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
     <InputArea submit={handlesubmit} />
      <div>
        <ul>
          {A.map((item,index) => (
           <ToDoItem key={index} id={index} text={item} onRemove={handleremove} />
          ))}
        </ul>
      </div>
    </div>
  );
}
