import React from 'react'
import './ShoppingCart.css'

export default function ShoppingCart({ cart }) {

  let cartIndex = [];
  cart.forEach(item => {
    cartIndex.push(item.id);
  });

  let newCart = filteredArr(cart);

  return (
    <div>
      <div id="shopping-cart">
        <div>
          {newCart.map(item => (
            <div key={`product-${item.id})`}>
              {countOfProduct(cartIndex, item.id)} {item.productName} {(item.price)*countOfProduct(cartIndex, item.id)} <img width="100px" src={item.pictureUrl} alt="#" /></div>
          ))}
        </div>
      </div>
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