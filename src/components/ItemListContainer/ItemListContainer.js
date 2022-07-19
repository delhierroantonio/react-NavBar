import React from 'react'
import cartLogo from '../../logos/cartLogo.png'
import ItemCount from '../ItemCount/ItemCount'

const ItemListContainer = () => {
  return (
    <div>
      <img src={cartLogo} alt='cart button' />
      <p>Aqui ira mi catalogo de productos</p>
      <ItemCount/>
    </div>
  )
}

export default ItemListContainer