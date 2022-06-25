import React from 'react';
import p from "./MyPosts.module.css"
import Post from "./Post/Post";

// export const mp = {
//     "posts": " .MyPosts_posts__2UPfV",
//     "item": "MyPosts_item__MIc0B",
//     "postImg":"MyPosts_App-logo__9\+mlU"
// }
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
                <Post message={"Hello, this is my 1 post through the props"}/>
                <Post message={"Hello, this is my 2 post through the props"}/>
                <Post message={"Hello, this is my 3 post through the props"}/>
            </div>
        </div>
    );
};

export default MyPosts;