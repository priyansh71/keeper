import React, { useState } from "react";
import "../styles.css";

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
    });
  };

  const handleremove = (event) => {
    let remove = event.target.className;
    let Ar = A.filter((x) => {
      return A.indexOf(x) != remove;
    });
    setA(Ar);
  };

  const Done = (event) => {
    let remove = event.target.className;
    let Ad = A.filter((x) => {
      return A.indexOf(x) != remove;
    });
    setTimeout(() => setA(Ad), 1000);
  };

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
          {A.map((item) => (
            <div key={A.indexOf(item)} className=" list">
              <li>
                <span>{item}</span>
                <button
                  id="done"
                  className={A.indexOf(item)}
                  onClick={Done}
                  type="submit"
                >
                  ✓
                </button>
                <button
                  id="remove"
                  className={A.indexOf(item)}
                  onClick={handleremove}
                >
                  ✘
                </button>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
