import React from 'react'
import './EachOrder.css';

function EachOrderPopup(props) {
  console.log(props.selecting);
  return (
    <div className='popup'>
      <div className='popup_inner'>
        <table id="table">
          <thead>
            <tr>
              <th colspan="5">Order Id : {props.selecting[0].orderId}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Amount</td>
              <td>Category</td>
              <td>Product Name</td>
              <td>Price</td>
              <td>Total Price</td>
            </tr>
          </tbody>
          <tbody>
            {
              (props.selecting || []).map((item, i) => (
                <tr>
                  <td>{item.product.productName}</td>
                  <td id="table-category">{item.product.category}</td>
                  <td>{item.product.price}</td>
                  <td>{item.amount}</td>
                  <td>{(item.amount * item.product.price).toFixed(1)}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
        <button id="close-popup" onClick={props.closePopup}>CLOSE</button>
      </div>
    </div >
  )
}
export default EachOrderPopup;