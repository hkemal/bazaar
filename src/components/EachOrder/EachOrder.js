//delete this component
import React, { useState } from 'react'
import './EachOrder.css';
import EachOrderPopup from './EachOrderPopUp';

const EachOrder = (props) => {
  console.log(props.selecting);
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
  }
  return (
    <div className='app'>
      <button onClick={togglePopup}>click</button>
      {showPopup ?
        <EachOrderPopup
          selecting={props.selecting}
          closePopup={togglePopup}
        />
        : null
      }
    </div>
  )
}
export default EachOrder;