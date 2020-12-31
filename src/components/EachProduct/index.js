import React from 'react'
import './EachProduct.css'

const EachProduct = (props) => {
  return (
    <div id="product">
      <div style={{background:"red"}}></div>
      <div style={{background:"green"}}></div>
      <div style={{background:"blue"}}></div>
      <button id="add-cart">Add Chart</button>
    </div>
  )
}
export default EachProduct;
