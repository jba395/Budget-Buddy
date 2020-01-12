import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // react bootstrap

// handle routing
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// import components to link
import Home from './components/home/home.js';
import Login from './components/login/login.js';

function App() {
  return (
    <div className="App">
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
         <h1 class="display-4">Budget Buddy</h1>
         <p class="lead">An Easier Way to Track Your Money</p>
        </div>
      </div>

      <Router>
      <div>
        <nav>
          
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}
    

export default App;
