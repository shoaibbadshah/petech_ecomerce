import { ADD_TO_CART } from "../constants";

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
