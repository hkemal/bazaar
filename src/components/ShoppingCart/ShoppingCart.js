import React from 'react'
import './ShoppingCart.css'

export default function ShoppingCart({ cart }) {

  let cartIndex = [];
  cart.forEach(item => {
    cartIndex.push(item.id);
  });

  let newCart = filteredArr(cart);

  let total = 0;

  newCart.map(item => (
    total += Number(((item.price) * countOfProduct(cartIndex, item.id)).toFixed(1))
  ))

  return (
    <div id="shopping-cart">
      {newCart.map(item => (
        <div key={`product-${item.id})`} className="cart-item">
          <span>{countOfProduct(cartIndex, item.id)}</span>
          <span>{item.productName}</span>
          <span>₺{Number(((item.price) * countOfProduct(cartIndex, item.id)).toFixed(1))}</span>
          <img width="70" src={item.pictureUrl} alt="#" />
        </div>
      ))}
      <hr />
      <span>Total : ₺ {total}</span>
    </div>
  )
}

let countOfProduct = (arr, index) => {
  return arr.reduce((total, x) => (x == index ? total + 1 : total), 0);
}

const filteredArr = (arr) => arr.reduce((acc, current) => {
  const x = acc.find(item => item.id === current.id);
  if (!x) {
    return acc.concat([current]);
  } else {
    return acc;
  }
}, []);