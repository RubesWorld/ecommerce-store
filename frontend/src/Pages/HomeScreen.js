import React from "react";
import ProductCard from "../Components/ProductCard.js";
//data import
import data from "../data.js";

function HomeScreen() {
  return (
    <div>
      <div className="row center">
        {data.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default HomeScreen;
