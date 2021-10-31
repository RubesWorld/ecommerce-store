import { applyMiddleware, compose, createStore } from "redux";
import data from "./data";
import thunk from "redux-thunk";

const initialState = {};

const reducer = (state, action) => {
  return { products: data.products };
};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;