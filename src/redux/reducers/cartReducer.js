import { ADD_TO_CART } from "../constants";

const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.payload;
      const existingItem = state.cartItems.find(
        (x) => x?.product?.id === item.product.id && x.size === item.size
      );

      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((cartItem) =>
            cartItem.product?.id === item.product?.id &&
            cartItem.size === item.size &&
            cartItem.quantity > 1
              ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
              : state.cartItems.filter(
                  (item) =>
                    !(
                      item.product?.id === item.product?.id &&
                      item.size === item.size
                    )
                )
          ),
        };
      }

      // if (existingItem) {
      //   return {
      //     ...state,
      //     cartItems:
      //       existingItem.quantity === 0
      //         ? state.cartItems.filter(
      //             (item) =>
      //               !(
      //                 item.product.id === item.product.id &&
      //                 item.size === item.size
      //               )
      //           )
      //         : state.cartItems.map((cartItem) =>
      //             cartItem.product.id === item.product.id &&
      //             cartItem.size === item.size
      //               ? { ...cartItem, quantity: item.quantity }
      //               : cartItem
      //           ),
      //   };
      // }

      return {
        ...state,
        cartItems: [...state.cartItems, { ...item }],
      };
    default:
      return state;
  }
};

export default cartReducer;
