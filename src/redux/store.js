import { createStore } from 'redux';
import rootReducer from './rootReducer'; // Replace with your reducer import

const store = createStore(rootReducer);

export default store;
