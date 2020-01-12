import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // react bootstrap
import Login from './components/login/login.js';

function App() {
  return (
    <div className="App">
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
         <h1 class="display-4">Budget Buddy</h1>
         <p class="lead">Tracking Your Money Shouldn't Be Hard</p>
        </div>
      </div>
      
      <Login />
    
    </div>
  );
}

export default App;
