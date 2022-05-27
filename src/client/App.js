import React from "react";
import { BrowserRouter as Router, Route, Switch, useParams } from "react-router-dom";
import TestComponent from "./components/TestComponent/TestComponent";
import Home from "./components/home/index"

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/meals/:id" component={() => (<p>hi {useParams().id}</p>)}>
        
      </Route>
      <Route exact path="/test-component">
        <TestComponent></TestComponent>
      </Route>
    </Router>
  );
}

export default App;
