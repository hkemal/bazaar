import React, { useState, useEffect } from 'react'
import AccountPage from '../pages/AccountPage/AccountPage';

const AccountInfo = () => {
  let id = 1;
  const [info, setInfo] = useState([]);
  useEffect(async () => {
    let info;
    info = await window.fetch(`/api/get-by-customer-id/${id}`);
    const infoJson = await info.json();
    setInfo(infoJson);
  }, []);
  return (
    <div>
      <AccountPage info={info} />
    </div>
  )
}
export default AccountInfo;