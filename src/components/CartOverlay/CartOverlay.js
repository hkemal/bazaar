import React from 'react'
import Overlay from '../Overlay/Overlay'
import ShoppingCart from '../ShoppingCart/ShoppingCart'

export default function CartOverlay({cart, opened, style}) {
  return (
    <Overlay opened={opened} style={style}>
      <ShoppingCart cart={cart} />
    </Overlay>
  )
}

