import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/css/App.scss';
import Login from "./components/Login"
import Home from "./components/Home"

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Login}/>
        <Route path="/home" component={Home}/>
      </Router>
    </div>
  );
}

export default App;
