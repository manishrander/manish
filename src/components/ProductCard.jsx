// src/components/ProductCard.js
import React from 'react';
import ProductImage from './ProductImage';
import ProductInfo from './ProductInfo';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <ProductImage image={product.thumbnail} />
            <ProductInfo 
                title={product.title} 
                description={product.description} 
                price={product.price} 
            />
        </div>
    );
};

export default ProductCard;
