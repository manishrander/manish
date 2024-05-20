// src/context/ProductContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // axios.get('https://dummyjson.com/products')
        axios.get('https://dummyjson.com/products')
            .then(response => {
                setProducts(response.data.products);
            })
            .catch(error => {
                console.error('There was an error fetching the product data!', error);
            });
    }, []);

    return (
        <ProductContext.Provider value={{ products }}>
            {children}
        </ProductContext.Provider>
    );
};
