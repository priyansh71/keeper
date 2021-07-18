import React, { useState } from "react";
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';


function CreateArea(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
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

  return (
    <center>
      <form  className="create-note">
      { expand ? <input
        
        name="title"
        placeholder="Title"
        onChange={handlechange1}
        value={title}
        autoFocus
      /> : null }
        
        <textarea
          onClick={expander}
          onChange={handlechange2}
          name="content"
          placeholder="Take a note..."
          rows={expand ? 3 : 1}
          value={content}
        />
        <Zoom in={expand} timeout={ {enter : "800ms"}} >
        <Fab
          onClick={(e) => {
            e.preventDefault();
            props.onDone(title, content);
            setTitle("");
            setContent("");
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