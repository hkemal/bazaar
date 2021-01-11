import React from 'react'
import './EachProduct.css'

const EachProduct = ({ item, onAddToCart }) => {

  return (
    <div id="product" style={{ background: "white", borderRadius: '4px', border: "0.5px black solid" }}>
      <div id="image-div">
        <img id="image" width='150px' className="productPicture" src={item.pictureUrl} alt="#####" />
      </div>
      <div style={{ borderTop: "1px black solid", paddingTop: "6px" }}>{item.name}</div>
      <div style={{ paddingTop: "6px" }}>₺ {item.price}</div>
      <button onClick={e => onAddToCart(item)} id="add-cart" style={{ fontSize: "16px" }}>Add Cart</button>
    </div>
  )
}
export default EachProduct;
