import React from 'react'
import './EachProduct.css'

const EachProduct = (props) => {
  return (
    <div id="product">
      <div style={{background:"grey"}}>Picture</div>
      <div style={{background:"green"}}>Product Name</div>
      <div style={{background:"darkgoldenrod"}}>₺ Price</div>
      <button id="add-cart">Add Chart</button>
    </div>
  )
}
export default EachProduct;
