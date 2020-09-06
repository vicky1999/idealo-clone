import React from 'react';
import './styles/Product.css';
import logo from './Images/logo.png';
const Product= () => {
    return (
        <div className="Product">
            <img src={logo} alt="logo" />
            <p>from $620</p>
            <h6>Apple iPhone 11</h6>
        </div>
    )
}

export default Product;