import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';
import './Friends.css'
const Friends = () => {
    const friends = useLoaderData();
    return (
    
        <div >
            <div>
            <h2>My Friends : {friends.length}</h2>
                
           </div>       
           <div className='friends'>
           {
                friends.map(friend => <Friend
                    key={friend.id}
                    friend={friend}
                ></Friend>)
            }
           </div>
        </div>
    );
};

export default Friends;