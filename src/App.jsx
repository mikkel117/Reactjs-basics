import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TestNav from "./component/header/TestNav";
import Home from "./component/pages/Home";
import Usestate from "./component/pages/UseState";
import NotFound from "./component/pages/NotFound";
import Nav from "./component/header/Nav";

function App() {
  return (
    <div className='App'>
      <Nav />
    </div>
  );
}

export default App;
