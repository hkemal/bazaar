import React, { useState } from 'react';
import './App.css';
import LoginPage from './pages/LoginPage/LoginPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import AccountPage from './pages/AccountPage/AccountPage';
import OrderPage from './pages/OrderPage/OrderPage';
import OrderInformationPage from './pages/OrderInformationPage/OrderInformationPage';


function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    const newCart = Array.from(cart);
    const itemIdx = cart.findIndex(it => it.id === item.id);
    if (itemIdx > -1) {
      newCart[itemIdx].quantity++;
    } else {
      newCart.push({ ...item, quantity: 1 });
    }
    setCart(newCart);
  };

  return (
    <div className="App">
      <Router>
        <Switch>

          <Route exact path="/" component={LoginPage} />

          <Route exact path="/products">
            <ProductsPage onAddToCart={handleAddToCart} cart={cart} />
          </Route>

          <Route path="/products/:category">
            <ProductsPage onAddToCart={handleAddToCart} cart={cart} />
          </Route>

          <Route path="/account">
            <AccountPage cart={cart} />
          </Route>

          <Route exact path="/order">
            <OrderPage cart={cart} />
          </Route>

          <Route path="/order-information">
            <OrderInformationPage cart={cart} />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
