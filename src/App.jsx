import React from "react";
import Todo from "./components/Todo";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () =>{
    return(
        <div>
         <Router>
            <Switch>
                <Route path="/todo" component={Todo} />
                <Route path="/" component={Home} />
            </Switch>
        </Router>
        </div>

    )
}

export default App;