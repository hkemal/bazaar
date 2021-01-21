import React, { useState } from 'react';
import AccountIcon from '../icons/AccountIcon';
import ShoppingCartIcon from '../icons/ShoppingCartIcon';
import { useHistory } from 'react-router-dom';
import Menu from '../Menu/Menu';
import './Navbar.css';
import CartOverlay from '../CartOverlay/CartOverlay';

export default function Navbar(props) {

  const history = useHistory();

  const [isAccountMenuOpened, setIsAccountMenuOpened] = useState(false);

  const [isCartOpened, setIsCartOpened] = useState(false);

  const handleAccountClick = () => {
    setIsAccountMenuOpened(!isAccountMenuOpened);
  }

  const handleBasketClick = () => {
    setIsCartOpened(!isCartOpened)
  }

  return (
    <div id="navbar" >
      <div id="navbar-text">
        BAZAAR
      </div>
      <div id="navbar-right">
        <div id="basket-div">
          <button id="basket-button" onClick={handleBasketClick}>
            <ShoppingCartIcon />
            BASKET
          </button>
          <CartOverlay opened={isCartOpened} cart={props.cart} style={{ left: 0, top: 38 }} />
        </div>

        <div id="account-div">
          <button id="user-button" onClick={handleAccountClick}>
            <AccountIcon />
            MY ACCOUNT
          </button>
          <Menu opened={isAccountMenuOpened} style={{padding:3, left: 0, top: 38 }} items={[{
            label: 'Account',
            onClick: () => history.push('/account')
          },{
            label: 'Order Information',
            onClick: () => history.push('/order-information')
          },{
            label: 'Add Product',
            onClick: () => history.push('/new-product')
          }, {
            label: 'Logout',
            onClick: () => history.push('/')
          }]} />
        </div>
      </div>
    </div>
  );
}