import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Usestate from "../pages/UseState";
import NotFound from "../pages/NotFound";

export default function Nav() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/usestate'>usestate</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/usestate' component={Usestate} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}
