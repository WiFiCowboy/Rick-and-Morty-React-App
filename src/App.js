import React from "react";
import About from "./components/About";
import Charecters from "./components/Charecters";
import Nav from "./components/Nav";
import Details from "./components/Details";
import "./App.css";
// Calling BrowserRouter as Router "can call anything using 'as' something"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    // Allows Compemenets to use Browser router
    <Router>
      <div className="App">
        <Nav />
        {/* Switch will stop when it finds the first match to a path 'like a break in a switch statement'  NOTE: for home path "/" need to use exact or switch will prevent any other path from being accessed */}
        <Switch>
          {/* Route sets the path "URL" to access the component in component */}
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/Charecters" exact component={Charecters} />
          <Route path="/Charecters/:id" component={Details} />
        </Switch>
      </div>
    </Router>
  );
}
// Test to show how component renders via Route
const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;
