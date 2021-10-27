import React from "react";
import Rating from "./Rating.js";

function ProductCard({ product }) {
  return (
    <div className="row center">
      <div key={product.id} className="card">
        <a href={`/product/${product.id}`}>
          <img className="medium" src={product.image} alt="product-pants" />
        </a>
        <div className="card-body">
          <a href="product.html">
            <h2>{product.name}</h2>
          </a>
          <Rating rating={product.rating} numReviews={product.numReviews} />
          <div className="price">{product.price}</div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
