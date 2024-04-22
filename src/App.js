import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import ProductsList from "./components/ProductsList";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <ProductsList />
      </div>
    </Provider>
  );
};

export default App;
