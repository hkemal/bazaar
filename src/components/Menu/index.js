import React, { useState } from 'react';
import './Menu.css';

// { opened: bool, items: [{ label: string, onClick: fn }] }
const Menu = (props) => {
  if (!props.opened) return null;
  return (
    <div className="Menu" style={props.style}>
      {(props.items || []).map((item, i) => <button onClick={item.onClick} className="MenuItem" key={`Menu-item-${i}`}>{item.label}</button>)}
    </div>
  )
}
export default Menu;