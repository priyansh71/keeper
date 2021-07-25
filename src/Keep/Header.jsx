import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";

function Header() {
  return (
    <header>
      <center>
        <span>Keeper</span>
      </center>
      <span
        style={{
          position: "absolute",
          top: "20px",
          right: "15px",
          fontSize: "2em",
        }}
      >
        <a
          href="https://github.com/priyansh71"
          target="_blank"
          style={{ textDecoration: null, color: "black" }}
        >
          <GitHubIcon fontSize="large" />
        </a>
      </span>
    </header>
  );
}

export default Header;
