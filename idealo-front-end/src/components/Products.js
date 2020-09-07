import React from 'react';
import './styles/Product.css';

const Product= (props) => {
    console.log(props.image);
    return (
        <div className="Product">
            <img src={require( `${ props.image }` )} alt="preview" />
            <p>{props.price}</p>
            <h6>{props.name}</h6>
        </div>
    )
}

export default Product;