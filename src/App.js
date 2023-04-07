import React from "react";
// import './App.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Home from "./components/home/Home";
import Show from "./components/show/Show";
import Fetch from "./components/home/Fetch";
import Next from "./components/Next"
import Prev from './components/Prev'
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Fetch} />
        <Route path="/card/:id" component={Show} className="grid" />
        <Route path="/card/prev" component={Prev} className="grid" />
        <Route path="/card/next/:id" component={Next} className="grid" />
      </Switch>
    </Router>
  );
}

export default App;
