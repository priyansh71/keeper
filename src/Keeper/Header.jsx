import React from "react";
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';

function Header() {
  return (
    <header>
    <BookmarkBorderOutlinedIcon style={{ fontSize : "1.8em" , color : "#fce4ec" , margin: "0px 3px"}} />
      <span>Keeper</span>
    </header>
  );
}

export default Header;
