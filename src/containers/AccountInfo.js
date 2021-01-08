import React, { useState, useEffect } from 'react'


const AccountInfo = () => {
  const userInfo = JSON.parse(localStorage.getItem('userData'));
  let id = userInfo.id;
  const [info, setInfo] = useState(null);
  useEffect(async () => {
    let information = await window.fetch(`/api/get-by-customer-id/${id}`);
    const informationJson = await information.json();
    setInfo(informationJson);
  }, []);

  if (!info) return 'Loading';
  return (
    <div style={{ height:"100%", backgroundColor:"#eee"}}>
      <div id="customer" >
        <p style={{ fontSize: "18px", fontWeight: 'bold', textAlign: "center" }}>Account Information</p>
        <div>Name : {info.name} {info.surname}</div>
        <div>Phone Number : {info.phoneNumber}</div>
        <div>Address : {info.address}</div>
        <div>Email : {info.email}</div>
      </div>
    </div>
  )
}
export default AccountInfo;