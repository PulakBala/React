import React from 'react';
import './PostsDetails.css'
const PostsDetails = ({post}) => {
    const {title, body} = post;
    return (
        <div className='post'>
            <h2>A lot of facebook posts here.</h2>
            <h3>Headline : {title}</h3>
            <h4>Summery : {body}</h4>
        </div>
    );
};

export default PostsDetails;