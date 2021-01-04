import React from 'react';
import './App.css';
import LoginPage from './pages/LoginPage/LoginPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import AccountPage from './pages/AccountPage/AccountPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/products" component={ProductsPage} />
          <Route path="/account" component={AccountPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
