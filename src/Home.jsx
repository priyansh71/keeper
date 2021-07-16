import React from "react";
import { Link } from "react-router-dom";

const App = () =>{
    return(
        <center>
        <div className="mt-12 mx-auto" style={{ fontFamily : "Architects Daughter" }}>
        <h1 className="text-4xl text-gray-900 my-4">Homepage</h1>
        <br />
        <button className="border-purple-900  hover:bg-purple-900 btn  text-purple-900 ">
        <Link to="/">
            Home
        </Link>
        </button>
        
        <br />
        <button  className="border-purple-900  hover:bg-purple-900 btn  text-purple-900 "><Link to="/todo">
            Todo
        </Link></button>
        
        <br />
        <button  className="border-purple-900  hover:bg-purple-900 btn  text-purple-900 "><Link to="/keep">
            Keep
        </Link>
        </button>
        </div>
        </center>

    )
}

export default App;