import React, { useState } from "react";
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';


function CreateArea(props) {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const day = date.getDate();
  const month = date.getMonth();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  let [time, setTime] = useState("");
  let [creationDate, setCreationDate] = useState("");
  const [expand, setExpand] = useState(false);

  const handlechange1 = (event) => {
    const value = event.target.value;
    setTitle(value);
  };
  const handlechange2 = (event) => {
    const value = event.target.value;
    setContent(value);
  };
  const expander = () => {
    setExpand(true)
  }

  const handletime = (a, b) =>{
    time = a + ":" + b;
  }

  const handledate = (c, d) =>{
    creationDate = c + "/" + d;
  }

  return (
    <center>
      <form  className="create-note">
      { expand ? <input
        
        name="title"
        placeholder="Title"
        onChange={handlechange1}
        value={title}
        spellCheck={false}
        autoFocus
      /> : null }
        
        <textarea
          onClick={expander}
          onChange={handlechange2}
          name="content"
          placeholder="Take a note..."
          rows={expand ? 4 : 1}
          value={content}
          spellCheck={false}
        />
        <Zoom in={expand} timeout={{ enter :"800ms" }} >
        <Fab
          onClick={() => {
            handletime(hours,minutes);
            handledate(day,month);
            props.onDone(title, content, time, creationDate);
            setTitle("");
            setContent("");
            setTime("")
            setCreationDate("")
          }}
          color="secondary"
        >
        <DoneOutlineIcon />
        </Fab>
        </Zoom>
      </form>
    </center>
  );
}

export default CreateArea;