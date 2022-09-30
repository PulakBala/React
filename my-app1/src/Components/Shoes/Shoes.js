import React from 'react';
import { add } from '../../Utilities/Calculate';

const Shoes = () => {
    const first = 50;
    const second = 50;
    const total = add(first , second);
    return (
        <div>
           <h1>Welcome to my shoes store</h1> 
           <p>Total : {total}</p>
        </div>
    );
};

export default Shoes;<h1>Welcome to my shoes store</h1>