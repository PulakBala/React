import React from 'react';
import { Link } from 'react-router-dom';
import './PostsDetails.css'
const PostsDetails = ({post}) => {
    const {id, title, body} = post;
    return (
        <div className='post'>
            <h2>A lot of facebook posts here.</h2>
            <h3>Headline : {title}</h3>
            <h4>Summery : {body}</h4>
            
            <Link to={`/post/${id}`}>
              <button>Show Details</button>
            </Link>
        </div>
    );
};

export default PostsDetails;