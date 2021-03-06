import React from "react";
import Rating from "./Rating.js";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div key={product.id} className="card">
      <Link to={`/product/${product.id}`}>
        <img className="medium" src={product.image} alt={product.name} />
      </Link>
      <div className="card-body">
        <Link to={`/product/${product.id}`}>
          <h2>{product.name}</h2>
        </Link>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <div className="price">${product.price}</div>
      </div>
    </div>
  );
}

export default ProductCard;
