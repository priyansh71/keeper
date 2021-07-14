import React from "react";
import { Link } from "react-router-dom";

const App = () =>{
    return(
        <div>
        Home
        <br />
        <br />
        <Link to="/">
            Home
        </Link>
        <br />
        <Link to="/todo">
            Todo
        </Link>
         
        
        </div>

    )
}

export default App;