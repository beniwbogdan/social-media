import React from 'react';
import p from "./MyPosts.module.css"
import Post from "./Post/Post";


const MyPosts = (props:any) => {
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
                {
                    props.postData.map((w:any)=>{
                        return(
                            <Post message={w.message} likeCounter={w.likesCount}/>
                        );
                    })
                }

            </div>
        </div>
    );
};

export default MyPosts;