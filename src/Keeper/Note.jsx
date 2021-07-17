import React from "react";
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <Zoom in={true} timeout={{ enter : "400ms"}}>
      <Fab  onClick={() => {
          props.onDelete(props.id);
        }}
        color="inherit"
        size="medium"
        >
        <DeleteOutlinedIcon style={{ color : "#e91e63" , fontSize : "1.82em"}} />
      </Fab>
      </Zoom>
    </div>
  );
}

export default Note;
