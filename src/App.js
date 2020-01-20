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
import Register from './components/register/register.js'

function App() {
  return (
    <div className="App">
      <div className = 'jumbo'>
         <h1 className="display-4">Budget Buddy</h1>
         <p className="lead">An Easier Way to Track Your Money</p>
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
          <Route exact path='/register'>
            <Register />
          </Route>

        </Switch>
      </div>
    </Router>
    </div>
  );
}
    

export default App;
