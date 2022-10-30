import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PostsDetails from '../PostsDetails/PostsDetails';
import './Posts.css'
const Posts = () => {
    const posts = useLoaderData();
    return (
        <div className='posts-layout'>
            {
                posts.slice(0, 20).map(post => <PostsDetails
                    key={post.id}
                    post={post}
                ></PostsDetails>)
            }
        </div>
    );
};

export default Posts;