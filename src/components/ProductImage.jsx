// src/components/ProductImage.js
import React from 'react';

const ProductImage = ({ image }) => {
    return <img src={image} alt="Product" className="product-image" />;
};

export default ProductImage;
