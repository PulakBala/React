import React from 'react';
import { multiply } from '../../Utilities/Calculate';

const Chosmatics = () => {
    const first = 3;
    const second = 3;
    const total = multiply(first, second)
    return (
        <div>
            <h1>Welcome to my chosmatics store</h1>
            <h4>Total : {total}</h4>
        </div>
    );
};

export default Chosmatics;<h1>Welcome to my chosmatics store</h1>