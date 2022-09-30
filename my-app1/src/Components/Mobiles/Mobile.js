import React from 'react';
import DisplayMobile from '../displayMoblie.js/DisplayMobile';

const Mobile = () => {
    const mobiles = [
        {id:1, name: 'Walton', price: 1200},
        {id:2, name: 'Tecno', price: 1300},
        {id:3, name: 'iphone', price: 15500},
        {id:4, name: 'Nokia', price: 11100},
        {id:5, name: 'realme', price: 1200},
        {id:6, name: 'OnePlus', price: 39300},
        {id:7, name: 'Samsung', price: 21200}

    ]
    return (
        <div>
            <h1>Display Mobile</h1>

            {
                mobiles.map(mobile => <DisplayMobile key={mobile.id}
                mobile={mobile}
                ></DisplayMobile>)
            }
        </div>
    );
};

export default Mobile;<h1>Display Mobile</h1>