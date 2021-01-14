import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import CategoryList from '../../containers/CategoryList';
import PostingOrder from '../../containers/PostingOrder';
import './OrderPage.css'

const OrderPage = ({ cart }) => {

  let total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <Navbar cart={cart} />
      <div id="info-container" style={{ width: "66.67%", height: '100%', margin: "0 auto" }}>
        <div id="categories-div" style={{ borderRight: "1px solid black" }}>
          <h4 id="categories-text">Categories</h4>
          <CategoryList />
        </div>
        <div id="order">
          <h1>Place Order</h1>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr>
                  <td>{item.quantity}</td>
                  <td>{item.productName}</td>
                  <td>₺{((item.price) * item.quantity).toFixed(1)}</td>
                  <td>
                    <img width="70" src={item.pictureUrl} alt="#" />
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan="2"><strong>Total</strong></td>
                <td>₺{total.toFixed(1)}</td>
              </tr>
            </tbody>
          </table>
          <PostingOrder cart={cart} />
        </div>

      </div>
    </div >
  )
}

export default OrderPage;
