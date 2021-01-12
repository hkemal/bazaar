import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import AccountInfo from '../../containers/AccountInfo';
import CategoryList from '../../containers/CategoryList';
import './AccountPage.css';

const AccountPage = (props) => {
  return (
    <div>
      <Navbar cart={props.cart} />
      <div id="info-container" style={{ width: "66.67%", height: '100%', margin: "0 auto" }}>
        <div id="categories-div">
          <h4 id="categories-text">Categories</h4>
          <CategoryList />
        </div>
        <AccountInfo />
      </div>
    </div>
  )
}

export default AccountPage;