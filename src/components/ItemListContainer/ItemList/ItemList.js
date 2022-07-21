import Item from '../Item/Item'
import React from 'react'

const ItemList = ({data = []}) => {
    return (
        data.map(bankOfImages => <Item key={bankOfImages.id} info={bankOfImages}/>)
    )
}

export default ItemList