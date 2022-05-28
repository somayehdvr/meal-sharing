import React from "react";
import { BrowserRouter as Router, Route, Switch, useParams } from "react-router-dom";
import Home from "./components/Home"
import Meals from "./components/Meals";
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
