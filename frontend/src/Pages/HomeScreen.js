import React, { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard.js";
//data import
import data from "../data.js";

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
      } catch (error) {
        setError(error.message);
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
          {data.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
  }
}

export default HomeScreen;
