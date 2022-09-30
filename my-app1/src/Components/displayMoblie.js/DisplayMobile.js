import React from 'react';
import { adToDb, removeFromDb } from '../../Utilities/adToDb';
import './displayMoblie.css'

const DisplayMobile = (props) => {
    const {name, price,id} = props.mobile;

    const addToCart =(id)=>{
        adToDb(id);
    }
    const removeCartDb = id =>{
        removeFromDb(id)
        // console.log('remove');
    }

  
    return (
        <div className='product'>
            <h2><small>Product Name : </small>{name}</h2>
            <h4>Price :{price}</h4>
            <h5>It has Id : {id}</h5>
            <button onClick={()=>addToCart(id)}>Add To Cart</button>
            <button onClick={()=>removeCartDb(id)}>Remove</button>

        </div>
    );
};

export default DisplayMobile;