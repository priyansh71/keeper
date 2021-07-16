import React from "react";
import Todo from "./ToDo/ToDo";
import Keep from "./Keep/Keep";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () =>{
    return(
         <Router>
            <Switch>
                <Route path="/todo" component={Todo} />
                <Route exact path="/" component={Home} />
                <Route path="/keep" component={Keep} />
            </Switch>
        </Router>

    )
}

export default App;