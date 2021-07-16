import React, { useState } from "react";
import "./index.css";
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
    <div id="fancyscroll" className=" sm:w-5/6 lg:w-3/5 h-screen mt-24 mb-0 mx-auto border-white py-10 text-3xl float-none text-gray-900 bg-transparent">
        <h1 className="mt-4 mb-5 text-3xl text-center">To-Do List</h1>
     <InputArea submit={handlesubmit} />
      <div>
        <ul>
          {A.map((item,index) => (
            <div className="list-disc text-2xl my-2 sm:mx-40 lg:mx-52">
           <ToDoItem key={index} id={index} text={item} onRemove={handleremove} />
           </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
