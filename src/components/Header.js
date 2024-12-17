import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{ background: "#333", padding: "1rem", color: "#fff" }}>
      <nav style={{ display: "flex", justifyContent: "space-around" }}>
        <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>Home</Link>
        <Link to="/products" style={{ color: "#fff", textDecoration: "none" }}>Products</Link>
        <Link to="/cart" style={{ color: "#fff", textDecoration: "none" }}>Cart</Link>
        <Link to="/contact" style={{ color: "#fff", textDecoration: "none" }}>Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
