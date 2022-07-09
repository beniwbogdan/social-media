import React from 'react';
import p from "./MyPosts.module.css"
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div>
            <div >
                My posts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
            </div>

            <div className={p.posts}>
                <Post message={"Hello, this is my 1 post through the props"} likeCounter={0}/>
                <Post message={"Hello, this is my 2 post through the props"} likeCounter={2}/>
                <Post message={"Hello, this is my 3 post through the props"} likeCounter={3}/>
            </div>
        </div>
    );
};

export default MyPosts;