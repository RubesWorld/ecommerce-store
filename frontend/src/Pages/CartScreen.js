import React from "react";

function CartScreen(props) {
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
  return (
    <div>
      <h1>cart Screen</h1>
      <p>
        ADD TO CART : ProductID: {productId} QTY {qty}
      </p>
    </div>
  );
}

export default CartScreen;
