import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: "1rem", textAlign: "center" }}>
      <img src={product.image} alt={product.name} width="150" />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <Link to={`/products/${product.id}`}>
        <button>View Details</button>
      </Link>
    </div>
  );
}

export default ProductCard;
