import React from 'react';
import Navbar from './components/Navbar';
import Products from './components/Products';
import './UserPage.css';

const UserPage = () => {

  const userInfo = JSON.parse(localStorage.getItem('userData'));

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
    </div>
  );
}

export default UserPage;
