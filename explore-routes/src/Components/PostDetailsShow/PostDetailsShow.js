import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import './PostDetailsShow.css'
const PostDetailsShow = () => {
    const post = useLoaderData();
    const nevigate = useNavigate()
    const handleNavigate = () => {
        nevigate(`/friend/${post.userId}`)
    }
    return (
        <div className='post-detials-show'>
            <h2>Post Details Show Content</h2>
            <h4>Id Number : {post.id}</h4>
            <h3>Headline : {post.title}</h3>
            <h4>Summery : {post.body}</h4>
            <button onClick={handleNavigate}>Get the Author</button>
        </div>
    );
};

export default PostDetailsShow;