import React, { useState } from 'react';
import AccountIcon from '../icons/AccountIcon';
import ShoppingCartIcon from '../icons/ShoppingCartIcon';
import { useHistory } from 'react-router-dom';
import Menu from '../Menu';
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
      {/* <button id="menu-button">
        <AiOutlineMenu id="icon-menu" size="2rem" />
      </button>
      <Menu opened={true} items={[{
        label: 'Menu Item 1',
        onClick: () => console.log('Menu item 1 click.')
      }, {
        label: 'Menu Item 2',
        onClick: () => console.log('Menu item 2 click.')
      }, {
        label: 'Menu Item 3',
        onClick: () => console.log('Menu item 3 click.')
      }, {
        label: 'Menu Item 4',
        onClick: () => console.log('Menu item 4 click.')
      }, {
        label: 'Menu Item 5',
        onClick: () => console.log('Menu item 5 click.')
      }, {
        label: 'Menu Item 6',
        onClick: () => console.log('Menu item 6 click.')
      }]} /> */}

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
        onClick: () => console.log('Menu item 1 click.')
      }, {
        label: 'Logout',
        onClick: () => history.push('/')
      }]} />

    </div>
  );
}