import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants";

export const addToCart = (product, size, quantity) => {
  return {
    type: ADD_TO_CART,
    payload: {
      product,
      size,
      quantity,
    },
  };
};

export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    payload: id,
  };
};
