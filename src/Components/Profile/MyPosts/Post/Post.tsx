import React from 'react';
import p from "./Post.module.css"

const Post = () => {
    return (
        <div className={p.item}>
            <img className={p.item} src="https://iconape.com/wp-content/png_logo_vector/react.png" alt=""/>
            Hi, this is my first post
        </div>
    );
};

export default Post;