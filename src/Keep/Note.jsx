import React from "react";

function Note(props) {
  return (
    <span className="col-span-1 justify-between align-middle w-3/5 input bg-white mb-6 px-1 py-0 rounded-lg outline-none" style={{fontFamily : "Architects Daughter"}} >
      <h1 className="text-gray-900 p-2">{props.title}</h1>
      <p className="text-gray-500 p-2">{props.content}</p>
      <button
        onClick={() => {
          props.onDelete(props.id);
        }}
        className=" py-1 float-right rounded-lg border-purple-800 bg-white  hover:bg-purple-800 btn text-purple-800 mx-2"
      >
      <i class="far fa-trash-alt"></i>
      </button>
    </span>
  );
}

export default Note;
