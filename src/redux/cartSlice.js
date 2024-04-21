// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//     cartItems: [],
// };

// const cartSlice = createSlice({
//     name: 'cart',
//     initialState,
//     reducers: {
//         addToCart(state, action) {
//             const existingItem = state.cartItems.find(item => item.id === action.payload.id);
//             if (existingItem) {
//                 existingItem.quantity += action.payload.quantity;
//             } else {
//                 state.cartItems.push(action.payload);
//             }
//         },
//         // Add reducers for removing and updating cart items
//     },
// });

// export const { addToCart } = cartSlice.actions;
// export default cartSlice.reducer;

import React from 'react'

const cartSlice = () => {
    return (
        <div>cartSlice</div>
    )
}

export default cartSlice
