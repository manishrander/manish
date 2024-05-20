// src/components/ProductInfo.js
import React from 'react';

const ProductInfo = ({ title, description, price }) => {
    return (
        <div className="product-info">
            <h3>{title}</h3>
            <p>{description}</p>
            <p className="product-price">${price}</p>
        </div>
    );
};

export default ProductInfo;
