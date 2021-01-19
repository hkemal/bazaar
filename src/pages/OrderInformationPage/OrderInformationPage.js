import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import CategoryList from '../../containers/CategoryList';
import OrderInfoByCustomer from '../../containers/OrderInfoByCustomer';
import './OrderInformationPage.css'

export default function OrderInformationPage({ cart }) {
  return (
    <div>
      <Navbar cart={cart} />
      <div id="info-container" style={{ width: "66.67%", height: '100%', margin: "0 auto" }}>
        <div id="categories-div">
          <h4 id="categories-text">Categories</h4>
          <CategoryList />
        </div>
        <OrderInfoByCustomer />
      </div>
    </div>
  )
}

