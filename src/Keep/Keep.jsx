import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  const handledone = (title, content) => {
    setNotes((prev) => [...prev, { title: [title], content: [content] }]);
  };

  const handledelete = (id) => {
    setNotes((prev) => {
      return prev.filter((note, index) => {
        return id !== index;
      });
    });
  };

  return (
    <div>
      <Header />
      <CreateArea onDone={handledone} />
      <div >
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
