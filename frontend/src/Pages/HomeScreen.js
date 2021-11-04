import React, { useEffect } from "react";
import Loading from "../Components/Loading.js";
import MessageBox from "../Components/MessageBox.js";
import ProductCard from "../Components/ProductCard.js";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../redux/actions/ProductActions.js";

function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
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
