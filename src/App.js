import React, { useState } from 'react';
import './App.css';
import LoginPage from './pages/LoginPage/LoginPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import AccountPage from './pages/AccountPage/AccountPage';

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
  };
 
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/products">
            <ProductsPage onAddToCart={handleAddToCart} />
          </Route>
          <Route path="/products/:category">
            <ProductsPage onAddToCart={handleAddToCart} />
          </Route>
          <Route path="/account" component={AccountPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
