import React from 'react';
import './App.css';
import LoginPage from './LoginPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserPage from './UserPage';

function App() {
  return (
    <div className="App">      
      <Router>
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route path="/user" component={UserPage} />
    </Switch>
      </Router>
    </div>
  );
}

export default App;
