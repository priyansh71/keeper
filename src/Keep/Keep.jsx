import React, { useState ,useEffect } from "react";
import Header from "./Header";
import Note from "./Note";
import CreateArea from "./CreateArea";
import Time from "./Time";

function Keep() {
  const array = JSON.parse(localStorage.getItem("Note"))
  const [notes, setNotes] = useState(array ? array : []);

  const handledone = (title, content, time , creationDate) => {
    setNotes((prev) => [...prev, { title: [title]
      , content: [content] 
      , time: [time] 
      , creationDate : [creationDate]  
    }]);
  };

  const handledelete = (id) => {
    setNotes((prev) => {
      return prev.filter((note, index) => {
        return id !== index;
      });
    });
  };  

  useEffect(() => {
   localStorage.setItem("Note", JSON.stringify(notes)) ;
  }, [notes])

  return (
    <div>
      <Header />
      <Time />
      <CreateArea onDone={handledone} />
      <div >
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          time={note.time}
          date={note.creationDate}
          onDelete={handledelete}
        />
      ))}
      </div>

    </div>
  );
}

export default Keep;
