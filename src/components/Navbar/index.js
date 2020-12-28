import React from 'react';
import { AiOutlineMenu, AiOutlineUser } from 'react-icons/ai';
import Menu from '../Menu';
import './style.css';


export default function Navbar() {
  return (
    <div id="navbar" >
      <button>
        <AiOutlineMenu id="icon-menu" size="2.5rem" />
      </button>
      <Menu opened={true} items={[{
        label: 'Menu Item 1',
        onClick: () => console.log('Menu item 1 click.')
      }]} />
      <div>
        BAZAAR
      </div>
      <button>
        <AiOutlineUser id="icon-user" size="2.5rem" />
      </button>
      <Menu opened={true} style={{right: 0}} />
    </div>
  );
}