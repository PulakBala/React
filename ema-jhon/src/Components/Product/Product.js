import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name,seller,price,ratings,img} = props.product;
    return (
        <div className='product'>
            <img src={img} alt=""></img>
            <p className='product-name'>{name}</p>
        </div>
    );
};

export default Product;