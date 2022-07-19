import React from 'react'
import cartLogo from '../../logos/cartLogo.png'
import ItemCount from '../ItemCount/ItemCount'

const ItemListContainer = () => {
  const onAdd = (cantidad) => {
    console.log(`la cantidad a comprar sera: ${cantidad}`)
  }
  return (
    <div>
      <img src={cartLogo} alt='cart button' />
      <p>Aqui ira mi catalogo de productos</p>
      <ItemCount initial={1} stock={5} onAdd={onAdd} />
    </div>
  )
}

export default ItemListContainer