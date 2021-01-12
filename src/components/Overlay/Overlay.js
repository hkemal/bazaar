import React from 'react';
import './Overlay.css';

const Overlay = (props) => {
  if (!props.opened) return null;
  return (
    <div className="Overlay" style={props.style}>
      {props.children}
    </div>
  );
}
export default Overlay;