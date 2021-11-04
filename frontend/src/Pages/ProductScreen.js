import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loading from "../Components/Loading";
import MessageBox from "../Components/MessageBox";
import Rating from "../Components/Rating";

function ProductScreen(props) {
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  return (
    <div>
      {loading ? (
        <Loading />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
          <Link to="/">Back to Result</Link>
          <div className="row top">
            <div className="col-2">
              <img className="large" src={product.image} alt={product.name} />
            </div>
            <div className="col-1">
              <ul>
                <li>
                  <h2>{product.name}</h2>
                </li>
                <li>
                  <Rating
                    rating={product.rating}
                    numReviews={product.numReviews}
                  />
                </li>
                <li>Price: {product.price}</li>
                <li>Description:</li>
                <li>{product.description}</li>
                <li>Images</li>
                <li>
                  {/* <img src={product.image} alt="" className="thumbnail" /> */}
                </li>
              </ul>
            </div>
            <div className="col-1">
              <div className="card card-body">
                <ul>
                  <li>
                    <div className="row">
                      <div>Price</div>
                      <div className="price">${product.price}</div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div>Status: </div>
                      <div>
                        {product.countInStock > 0 ? (
                          <span className="success"> In Stock</span>
                        ) : (
                          <span className="error"> Unavailable</span>
                        )}
                      </div>
                    </div>
                  </li>
                  <li>
                    <button className="primary block">Add to Cart</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductScreen;
