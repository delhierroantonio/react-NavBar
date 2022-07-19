import React from 'react'
import cartLogo from '../../logos/cartLogo.png'
import ItemCount from '../ItemCount/ItemCount'

const ItemListContainer = (props) => {
  const onAdd = (cantidad) => {
    console.log(`la cantidad a comprar sera: ${cantidad}`)
  }
  return (
    <div>
      <img src={cartLogo} alt='cart button' />
      <h1>{props.greetings}</h1>
      <ItemCount initial={1} stock={5} onAdd={onAdd} />
    </div>
  )
}

export default ItemListContainer