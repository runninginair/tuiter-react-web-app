import React from 'react';
import Plus1 from './Plus1';
import { BrowserRouter, Link } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import { Provider } from 'react-redux';
import store from './Plus1/data/store';
import './App.css';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="container">

          <Routes>

            <Route path="/plusone/*" element={<Plus1 />} />

          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
