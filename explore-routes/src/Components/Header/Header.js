import React from 'react';
import { Link } from 'react-router-dom';
import '../css/header.css'
const Header = () => {
    return (
        <div className='header'>
            <Link to='/home'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/friends'>Friends</Link>
            <Link to='/posts'>Posts</Link>
            <Link to='/contact'>Contact</Link>
        </div>
    );
};

export default Header;