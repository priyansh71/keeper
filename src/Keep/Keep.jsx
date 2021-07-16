import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  const handledone = (title, content) => {
    console.log(title);
    console.log(content);
    setNotes((prev) => [...prev, { title: [title], content: [content] }]);
    console.log(notes);
  };

  const handledelete = (id) => {
    setNotes((prev) => {
      return prev.filter((note, index) => {
        return id !== index;
      });
    });
  };

  return (
    <div className="overflow-x-hidden">
      <Header />
      <CreateArea onDone={handledone} />
      <div className="mt-8 grid xsm:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full ml-7 md:mr-0 overflow-x-hidden" >
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={handledelete}
        />
      ))}
      </div>
    </div>
  );
}

export default App;
