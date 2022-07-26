import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useState, useEffect } from 'react';

const image = {
    id: 1,
    url: 'https://i.ytimg.com/vi/vyirRAuCPH0/maxresdefault.jpg',
    title: 'windows 11 PC',
    price: 2500,
    descr: 'PC de ultima generacion con windows 11 preinstalado!'
};

export const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(image);
            }, 3000);
        });

        getData.then(res => setData(res));
    }, [])

    return (
        <ItemDetail data={data} />
    )
}

export default ItemDetailContainer