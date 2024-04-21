import { combineReducers } from 'redux';
import cartReducer from './cartSlice'; // Replace with your reducer imports

const rootReducer = combineReducers({
    cart: cartReducer,
    // Add more reducers here
});

export default rootReducer;
