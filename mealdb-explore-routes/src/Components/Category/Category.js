import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {
    const meals = useLoaderData();
    const {idMeal} = meals.meals[0];
    return (
        <div>
            <h2>This is Category page</h2> 
            <h2>IdMeal : {idMeal}</h2>
        </div>
    );
};

export default Category;