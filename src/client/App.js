import React from "react";
import { BrowserRouter as Router, Route, Switch, useParams } from "react-router-dom";
import Home from "./components/Home"
import Meals from "./components/Meals";
import Meal from "./components/Meal";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css"

function App() {
  return (
    <div className="App">
    <Router>
      <Header />
      <section id="banner" />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/meals/:id" component={() => { return <Meal key={useParams().id} id={useParams().id} /> }} />
        <Route exact path="/meals">
          <Meals />
        </Route>
        <Route path="*">
          <h1>404: not found</h1>
        </Route>
      </Switch>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
