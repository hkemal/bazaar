import React from 'react'
import './EachProduct.css'

const EachProduct = (props) => {
  return (
    <div id="product">
      <div style={{ background: "grey",borderRadius: '4px' }}>{props.pictureUrl}</div>
      <div style={{ background: "green" }}>{props.name}</div>
      <div style={{ background: "darkgoldenrod" }}>₺ {props.price}</div>
      <button id="add-cart">Add Chart</button>
    </div>
  )
}
export default EachProduct;
