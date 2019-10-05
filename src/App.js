import React, { Component} from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import SingleRecipes from "./pages/SingleRecipes";
import Default from "./pages/Default";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
class App extends Component {
  render() {
  return (
    <Router >
      <main>
        {/* navbar */}
      <Switch> 
      <Route path="/" exact component={Home} />
      <Route path="/recipes" exact component={Recipes} />
      <Route path="/recipes/:id" component={SingleRecipes} />
      <Route component={Default} />
      </Switch>
      </main>
    </Router>

  );
}
}

export default App;
