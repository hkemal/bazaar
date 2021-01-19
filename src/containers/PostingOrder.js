import React, { useEffect, useState } from 'react';
import './PostingOrder.css';

export default function PostingOrder({ cart }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const user = localStorage.getItem('userData')
    if (user) setUser(JSON.parse(user));
  }, []);

  let postOrder = () => {
    let orderInformation = { 'customerId': user.id, items: cart.map(item => ({ productId: item.id, amount: item.quantity })) }
    let baseUrl = '/api/order-create';
    return fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Accept": "application/json"
      },
      body: JSON.stringify(orderInformation)
    })
      .catch(error => {
        alert('Order not added!');
      });
  };

  return (
    <div id='button-container'>
      <button id="order-button" onClick={postOrder} style={{ margin: "0 auto", width: "150px", height: "60px", fontSize: "20px" }}>ORDER</button>
    </div>
  );
}

