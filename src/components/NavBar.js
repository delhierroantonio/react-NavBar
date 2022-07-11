import React from 'react'

export const NavBar = () => {
    const flexRow = {display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2em', paddingInline: '3rem'};
    const listNone = {listStyleType: 'none',textDecoration: 'none', color: 'purple'};
    return (
        <nav style={flexRow}>
            <p>Brand Name</p>
            <ul style={flexRow}>
                <a href='./'><li style={listNone}>Home</li></a>
                <a href='./'><li style={listNone}>About</li></a>
                <a href='./'><li style={listNone}>Login</li></a>
                <a href='./'><li style={listNone}>Cart</li></a>
            </ul>
        </nav>

    )
}
