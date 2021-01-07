import React, { useState } from 'react';
import AccountIcon from '../icons/AccountIcon';
import ShoppingCartIcon from '../icons/ShoppingCartIcon';
import { useHistory } from 'react-router-dom';
import Menu from '../Menu/Menu';
import './Navbar.css';

export default function Navbar() {

  const userInfo = JSON.parse(localStorage.getItem('userData'));
  const history = useHistory();
  const [toggleMyAccountPopup, setToggleMyAccountPopup] = useState(false);
  const handleClick = () => {
    return (!toggleMyAccountPopup ? setToggleMyAccountPopup(true) : setToggleMyAccountPopup(false))
  }

  return (
    <div id="navbar" >
      <div id="navbar-text">
        BAZAAR
      </div>

      <div id="navbar-right">
        <div id="basket-div">
          <button id="basket-button">
            <ShoppingCartIcon />BASKET
          </button>
        </div>

        <div id="account-div">
          <button id="user-button" onClick={handleClick}>
            <AccountIcon />MY ACCOUNT
          </button>
        </div>
      </div>

      <Menu opened={toggleMyAccountPopup} style={{ right: 0, marginRight: '11rem' }} items={[{
        label: 'Account',
        onClick: () => history.push('/account')
      }, {
        label: 'Logout',
        onClick: () => history.push('/')
      }]} />

    </div>
  );
}