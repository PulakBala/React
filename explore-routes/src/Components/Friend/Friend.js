import React from 'react';
import { Link } from 'react-router-dom';

import './Friend.css'
const Friend = ({friend}) => {
    const {id, name, address, email, username} = friend;
    return (
        <div className='friend'>
            <h3>Name : {name}</h3>
            <p>address : {address.city}</p>
            <small>Email : {email}</small>
            <p><small>userName: <Link to={`/friend/${id}`}>{username}</Link></small></p>
        </div>
    );
};

export default Friend;