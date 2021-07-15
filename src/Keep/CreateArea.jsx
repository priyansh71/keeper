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
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={handlechange1}
          value={title}
        />
        <textarea
          onChange={handlechange2}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={content}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            props.onDone(title, content);
            setTitle("");
            setContent("");
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
