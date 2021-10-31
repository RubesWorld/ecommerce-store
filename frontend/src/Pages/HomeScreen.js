import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../Components/ProductCard.js";
import Loading from "../Components/Loading.js";
import MessageBox from "../Components/MessageBox.js";

function HomeScreen() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("/api/products");
        setLoading(false);
        setProducts(data);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  } else if (error) {
    return <MessageBox variant="danger">{error}</MessageBox>;
  } else {
    return (
      <div>
        <div className="row center">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
  }
}

export default HomeScreen;
