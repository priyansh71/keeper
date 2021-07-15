import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import CreateArea from "./CreateArea";
import "./styles.css"

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
    <div>
      <Header />
      <CreateArea onDone={handledone} />
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
  );
}

export default App;
