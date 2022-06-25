import React from 'react';
import p from "./Post.module.css"

const Post = (props:any) => {
    return (
        <div className={p.item}>
            <img className={p.item} src="https://iconape.com/wp-content/png_logo_vector/react.png" alt=""/>
           <div className={p.textMessage}>
               {props.message}
           </div>
            <span>Like</span>

        </div>
    );
};

export default Post;