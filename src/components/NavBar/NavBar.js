import React from 'react'
import CartWidget from './CartWidget/CartWidget';
export const NavBar = () => {
    const flexRow = {display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2em', paddingInline: '3rem'};
    const listNone = {listStyleType: 'none',textDecoration: 'none', color: 'purple'};
    return (
        <nav style={flexRow}>
        <CartWidget/>
            <ul style={flexRow}>
                <a href='./'><li style={listNone}>Home</li></a>
                <a href='./'><li style={listNone}>About</li></a>
                <a href='./'><li style={listNone}>Login</li></a>
                <a href='./'><li style={listNone}>Cart</li></a>
            </ul>
        </nav>

    )
}
