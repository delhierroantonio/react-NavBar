import React from 'react';
import './Detail.css'
export const ItemDetail = ({ data }) => {
    return (
        <div className='itemDetailBox'>
            <img className='itemDetailImage' src={ data.url } alt='imagen de PC con windows' />
            <h1 className='itemDetailTitle'>{ data.title }</h1>
            <p>{ data.descr }</p>
            <p className='itemDetailPrice'>${ data.price }</p>
        </div>
    )
}

export default ItemDetail