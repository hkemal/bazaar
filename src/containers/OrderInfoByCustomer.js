import React, { useState, useEffect } from 'react';
import EachOrderPopup from '../components/EachOrder/EachOrderPopUp';
import './OrderInfoByCustomer.css'

export default function OrderInfoByCustomer() {

  const [showPopup, setShowPopup] = useState(false);
  const [selectingOrder, setSelectingOrder] = useState(null);
  const userInfo = JSON.parse(localStorage.getItem('userData'));
  let customerId = userInfo.id;
  const [info, setInfo] = useState(null);

  useEffect(async () => {
    let information = await window.fetch(`/api/get-all-order-by-customer-id/${customerId}`);
    const informationJson = await information.json();
    setInfo(informationJson);
  }, []);
  if (!info) return 'Loading';

  //click button
  let handleClick = async (orderId) => {
    let orderInformation = await window.fetch(`/api/get-order-item-by-order-id/${orderId}`);
    const orderInformationJson = await orderInformation.json();
    setSelectingOrder(orderInformationJson);
    togglePopup();
  }

  //popup
  const togglePopup = () => {
    setShowPopup(!showPopup);
  }

  return (
    <div>
      <table style={{ marginTop: "1.5rem" }}>
        <thead>
          <tr>
            <th colspan="3">All Orders</th>
          </tr>
          <br />
          <tr>
            <th>Order Id</th>
            <th>Order Date</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {
            (info || []).map((item, i) => (
              <tr id="each-row">
                <td><div style={{ width: "4rem", height: "2rem", fontSize: "16px", marginTop: "5px", paddingTop:"5px"}}>{item.id}</div></td>
                <td><span style={{ width: "4rem", height: "2rem", fontSize: "16px", marginTop: "5px" }}>{item.orderDate}</span></td>
                <td><button id="details-button"
                 
                  onClick={() => {
                    handleClick(item.id)

                  }}>Details</button>
                  {
                    showPopup ?
                      <EachOrderPopup
                        selecting={selectingOrder}
                        closePopup={togglePopup}
                      />
                      : null
                  }
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
