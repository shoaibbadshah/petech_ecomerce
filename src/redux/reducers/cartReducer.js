import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants";

const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { product, size, quantity } = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.product.id === product.id && item.size === size
      );

      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.product.id === product.id && item.size === size
              ? { ...item, quantity: item.quantity + quantity }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { product, size, quantity }],
        };
      }

    case REMOVE_FROM_CART:
      const itemIdToRemove = action.payload;
      return {
        ...state,
        cartItems: state.cartItems
          .map((item) => {
            if (item.product.id !== itemIdToRemove) {
              return item;
            } else {
              return item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 }
                : undefined;
            }
          })
          .filter((item) => item !== undefined),
      };

    default:
      return state;
  }
};

export default cartReducer;
