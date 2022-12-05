import React from 'react';
import {useParams} from "react-router-dom";
import posts from '../../data/posts.json';
const Blog = () => {
    const {id} = useParams();
    const thisPost = posts.find((post) => {
        return post.id === id;
    });
    return (
        <div>
            <h1> {thisPost.title}</h1>
            <h2>{thisPost.date}</h2>
            <p> {thisPost.content}</p>
        </div>
    );
};

export default Blog;