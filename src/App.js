import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import ProductsList from './components/ProductsList';
import { Provider } from 'react-redux';
import store from './redux/store'; // Replace with your store import

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1 className="text-5xl font-bold underline">
          Hello world!
        </h1>
        <ProductsList />
      </div>
    </Provider>
    // <Router basename="/ps-calendar">
    //   <Routes>

    //     <Route path="/:year/:month" element={<Calendar />} />

    //     <Route path="/*" element={<Navigate to="/2023/6" />} />
    //   </Routes>
    // </Router>
  );
};

export default App;
