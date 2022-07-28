import React from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget/CartWidget";
export const NavBar = () => {
  const flexRow = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "2em",
    paddingInline: "3rem",
  };
  const listNone = {
    listStyleType: "none",
    textDecoration: "none",
    color: "purple",
  };
  return (
    <nav style={flexRow}>
      <CartWidget />
      <ul style={flexRow}>
        <NavLink to="/">
          <li style={listNone}>Home</li>
        </NavLink>
        <NavLink to="/about">
          <li style={listNone}>About</li>
        </NavLink>
        <NavLink to="/category/gaming">
          <li style={listNone}>Gaming</li>
        </NavLink>
        <NavLink to="/category/productivity">
          <li style={listNone}>Productivity</li>
        </NavLink>
        <NavLink to="/cart">
          <li style={listNone}>Cart</li>
        </NavLink>
      </ul>
    </nav>
  );
};
