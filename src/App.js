import React from "react";
// import './App.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Home from "./components/home/Home";
import Show from "./components/show/Show";
import Fetch from "./components/home/Fetch";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Fetch} />
        <Route path="/card/:id" component={Show} className = "grid" />
      </Switch>
    </Router>
  );
}

export default App;
