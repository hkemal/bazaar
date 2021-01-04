import React from 'react'
import Navbar from '../../components/Navbar';
import './AccountPage.css'

const AccountPage = () => {
  const userInfo = JSON.parse(localStorage.getItem('userData'));
  return (
    <div>
      <Navbar />
      <div id="customer">
          <div>{userInfo.name}</div>
          <div>{userInfo.surname}</div>
          <div>{userInfo.phoneNumber}</div>
          <div>{userInfo.address}</div>
          <div>{userInfo.email}</div>
        </div>
    </div>
  )
}

export default AccountPage;