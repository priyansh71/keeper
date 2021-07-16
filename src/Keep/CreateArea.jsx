import React, { useState } from "react";

function CreateArea(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handlechange1 = (event) => {
    const value = event.target.value;
    setTitle(value);
  };
  const handlechange2 = (event) => {
    const value = event.target.value;
    setContent(value);
  };

  return (
    <center>
      <form class="grid grid-cols-1" style={{fontFamily : "Architects Daughter"}}>
        <input
        
          name="title"
          placeholder="Title"
          onChange={handlechange1}
          value={title}
          className="input mx-auto xsm:w-11/12 sm:w-5/6 md:w-1/3 border-b-0 text-gray-900 py-2"
        />
        <textarea
          onChange={handlechange2}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={content}
          className="input mx-auto xsm:w-11/12 sm:w-5/6 md:w-1/3 border-t-0 text-gray-500 py-2"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            props.onDone(title, content);
            setTitle("");
            setContent("");
          }}
          className="btn py-1 border-pink-500  hover:bg-pink-500 btn text-pink-500 bg-white mx-auto"
        >
        <i class="fas fa-check"></i>
        </button>
      </form>
    </center>
  );
}

export default CreateArea;
