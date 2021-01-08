import React from 'react'
import './EachProduct.css'

const EachProduct = (props) => {

  let onAddToCart = () => {

  }

  return (
    <div id="product" style={{ background: "white", borderRadius: '4px', border: "0.5px black solid" }}>
      <div id="image-div">
        <img id="image" width='150px' className="productPicture" src={props.pictureUrl} alt="#####" />
      </div>
      <div style={{ borderTop: "1px black solid", paddingTop: "6px" }}>{props.name}</div>
      <div style={{ paddingTop: "6px" }}>₺ {props.price}</div>
      <button onClick={onAddToCart} id="add-cart" style={{ fontSize: "16px" }}>Add Cart</button>
    </div>
  )
}
export default EachProduct;
