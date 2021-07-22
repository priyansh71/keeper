import React from "react";
import GitHubIcon from '@material-ui/icons/GitHub';

function Header() {
  return (
    <header>
      <span>Keeper</span>
      <span style={{position: "absolute", top: "20px", right : "15px"}}>
        <a href="https://github.com/priyansh71" target="_blank" style={{textDecoration: null , color: "white"}}>
          <GitHubIcon fontSize="large" />
          </a>
      </span>
    </header>
  );
}

export default Header;