import React, { Component } from 'react';
import { useHistory } from "react-router-dom";

 const UserPage = () => {

    const userInfo = JSON.parse(localStorage.getItem('userData'));

    const history = useHistory();

    const handleClick = () => {
        history.push('/');
      }

    return(
    <div className="UserPage">
        <div>{userInfo.name}</div>
        <div>{userInfo.surname}</div>
        <div>{userInfo.phoneNumber}</div>
        <div>{userInfo.address}</div>
        <div>{userInfo.email}</div>
        <button type="button" onClick={() => handleClick()}>
        Turn Back
      </button>
    </div>
    );
}

export default UserPage;
