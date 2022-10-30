import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData();
    console.log(friend);
    return (
        <div>
            <h2>Friend Details About : {friend.name}</h2>
            <p>phone num: {friend.phone}</p>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, repudiandae!</h2>
        </div>
    );
};

export default FriendDetails;