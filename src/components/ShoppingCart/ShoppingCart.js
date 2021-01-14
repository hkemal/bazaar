import React from 'react'
import { Link } from 'react-router-dom';
import './ShoppingCart.css'

export default function ShoppingCart({ cart }) {
  let total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div id="shopping-cart">
      {cart.map((item) => (
        <div key={`product-${item.id})`} className="cart-item">
          <span>{item.quantity}</span>
          <span>{item.productName}</span>
          <span>₺{((item.price) * item.quantity).toFixed(1)}</span>
          <img width="70" src={item.pictureUrl} alt="#" />
        </div>
      ))}
      <hr />
      <div>Total : ₺ {total.toFixed(1)}</div>
      <Link to={`/order`} style={{ textDecoration: "none" }}>
        <div id='cart-link'>
          Go to Cart
        </div>
      </Link>
    </div>
  )
}