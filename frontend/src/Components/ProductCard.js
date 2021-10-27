import React from "react";
import Rating from "./Rating.js";

function ProductCard({ product }) {
  return (
    <div key={product.id} className="card">
      <a href={`/product/${product.id}`}>
        <img className="medium" src={product.image} alt={product.name} />
      </a>
      <div className="card-body">
        <a href={`/product/${product._id}`}>
          <h2>{product.name}</h2>
        </a>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <div className="price">{product.price}</div>
      </div>
    </div>
  );
}

export default ProductCard;