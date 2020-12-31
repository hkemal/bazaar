import React from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from './components/Navbar';
import Products from './components/Products';
import './UserPage.css';

const UserPage = () => {

  const userInfo = JSON.parse(localStorage.getItem('userData'));
  const history = useHistory();
  const handleClick = () => {
    history.push('/');
  }

  return (
    <div className="UserPage">
      <Navbar />
      <Products />

      <div id="body-product">    

        <div id="products">
          <div>{userInfo.name}</div>
          <div>{userInfo.surname}</div>
          <div>{userInfo.phoneNumber}</div>
          <div>{userInfo.address}</div>
          <div>{userInfo.email}</div>
        </div>
      </div>

      <button type="button" onClick={() => handleClick()}>
        Turn Back
  </button>
    </div>
  );
}

export default UserPage;
