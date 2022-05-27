import React from "react";
import { BrowserRouter as Router, Route, Switch, useParams } from "react-router-dom";
import TestComponent from "./components/TestComponent/TestComponent";
import Home from "./components/home/index"
import Meals from "./components/Meals/Meals";
import Meal from "./components/Meal";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/meals/:id" component={() => (<Meal key={useParams().id} id={useParams().id}/>)}>
        
      </Route>
      <Route exact path="/meals">
        <Meals />
      </Route>
    </Router>
  );
}

export default App;
