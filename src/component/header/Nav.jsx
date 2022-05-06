import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
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
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/usestate' element={<Usestate />} />
        <Route component={NotFound} />
      </Routes>
    </Router>
  );
}
