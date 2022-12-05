import React from 'react';
//import axios from 'axios';
import posts from '../../data/posts.json';
import {Link} from "react-router-dom";

const Blogoverzicht = () => {
    console.log(posts);
    return (
            <>
            <h1>Testing Blogoverzicht</h1>
            <h2>Number of Posts : {posts.length}</h2>
            <ul>
                {posts.map((post) => {
                    return (
                        <li key = {post.id}>
                            <Link to = {"/Blog/"+post.id}>{post.title}</Link>
                        </li>

                    )

                    }

                )}

            </ul>
            </>

    );
};

export default Blogoverzicht;