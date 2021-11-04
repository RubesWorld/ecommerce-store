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

  return (
    <div>
      {loading ? (
        <Loading />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
          <div className="row center">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default HomeScreen;
