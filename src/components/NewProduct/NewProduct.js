import React, { useState } from 'react'
import './NewProduct.css'
import NewProductPopup from './NewProductPopup';

function NewProduct() {

  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
  }
  return (
    <div id="new-product-div" style={{ display: "flex", textAlign: "center", justifyContent: "center" }}>
      <button onClick={togglePopup} id="add-product-button">ADD PRODUCT</button>
      {showPopup ?
        <NewProductPopup
          closePopup={togglePopup}
        />
        : null
      }
    </div>
  )
}
export default NewProduct;
