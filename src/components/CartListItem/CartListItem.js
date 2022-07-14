import React from 'react'
import cartLogo from '../../logos/cartLogo.png'

const CartListItem = () => {
  return (
    <div>
        <img src={cartLogo} alt='cart button' />
        <p>Aqui ira mi catalogo de productos</p>
    </div>
  )
}

export default CartListItem