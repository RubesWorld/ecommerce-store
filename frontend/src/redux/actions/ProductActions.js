import axios from "axios";

export const PRODUCT_LIST_REQUEST = "PRODUCT_LIST_REQUEST";
export const PRODUCT_LIST_SUCCESS = "PRODUCT_LIST_SUCCESS";
export const PRODUCT_LIST_FAIL = "PRODUCT_LIST_FAIL";

export const listProducts = () => async (dispatch) => {
  dispatch({ type: PRODUCT_LIST_REQUEST });
  try {
    const { data } = await axios.get("/api/products");
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
  }
};

//   axios
//     .get("/api/products")
//     .then((res) => {
//       console.log("products", res.data);
//       dispatch({ type: PRODUCT_LIST_SUCCESS, payload: res.data });
//     })
//     .catch((err) => {
//       console.log("ERROR", err);
//     });
// };
