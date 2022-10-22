import React from 'react';
import PricingOptions from '../PricingOptions/PricingOptions';

const Pricing = () => {
    const pricingOptions = [
        {id: 1, name: 'Free', price: 0, features:[
             'Awesome',
             'Extra Feature',
             'unnecessary Feature',
             'Hudai feature',
             'Ajaira Geature'
        ]},
        {id: 2, name: 'Medium', price: 9.99 , eatures:[
            'Awesome',
            'Extra Feature',
            'unnecessary Feature',
            'Hudai feature',
            'Ajaira Geature'
       ]},
        {id: 3, name: 'Premium', price: 19.99, eatures:[
            'Awesome',
            'Extra Feature',
            'unnecessary Feature',
            'Hudai feature',
            'Ajaira Geature'
       ]},

    ]
    return (
        <div>
            <h2 className='text-5xl font-bold bg-indigo-300 p-12 text-white'>Best Deal of the Town</h2>
            <div className='grid grid-cols-3 gap-3'>
            {
                pricingOptions.map(option => <PricingOptions
                    key={option.id}
                    option={option}
                ></PricingOptions>)
            }
            </div>
        </div>
    );
};

export default Pricing;