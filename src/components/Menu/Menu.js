import React from 'react';
import Overlay from '../Overlay/Overlay';
import './Menu.css';

// { opened: bool, items: [{ label: string, onClick: fn }] }
const Menu = (props) => {
  if (!props.opened) return null;
  return (
    <Overlay opened={props.opened} style={props.style}>
      {(props.items || []).map((item, i) => <button onClick={item.onClick} className="MenuItem" key={`Menu-item-${i}`}>{item.label}</button>)}
    </Overlay>
  )
}
export default Menu;