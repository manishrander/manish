// src/App.js
import React from 'react';
import { ProductProvider } from './context/ProductContext';
import ProductList from './components/ProductList';
import './App.css';

const App = () => {
    return (
        <ProductProvider>
            <div className="App">
                <h1>Product List</h1>
                <ProductList />
            </div>
        </ProductProvider>
    );
};

export default App;
