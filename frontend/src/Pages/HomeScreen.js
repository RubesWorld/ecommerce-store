import React, {useState, useEffect} from "react";
import axios from 'axios';
import ProductCard from "../Components/ProductCard.js";
//data import
import data from "../data.js";

function HomeScreen() {
  const [products, setProducts] = useState([])
  
  useEffect(() => {
   const fetchData = async () => {
     const {data} = await axios.get('/api/products');
     setProducts(data)
   };
   fetchData()
  }, [])


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
