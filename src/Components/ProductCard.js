import React from "react";

function ProductCard({ product }) {
  return (
    <div>
      <div className="row center">
        <div className="card">
          <a href="product.html">
            <img
              className="medium"
              src="./images/product-1.jpg"
              alt="product-pants"
            />
          </a>
          <div className="card-body">
            <a href="product.html">
              <h2>{product.products.name}</h2>
            </a>
            <div className="rating">
              <span>
                <i className="fa fa-star"></i>
              </span>
              <span>
                <i className="fa fa-star"></i>
              </span>
              <span>
                <i className="fa fa-star"></i>
              </span>
              <span>
                <i className="fa fa-star"></i>
              </span>
              <span>
                <i className="fa fa-star"></i>
              </span>
            </div>
            <div className="price">{product.products.price}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
