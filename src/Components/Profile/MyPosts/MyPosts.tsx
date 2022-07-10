import React from 'react';
import p from "./MyPosts.module.css"
import Post from "./Post/Post";
//import {postData} from "./../../../index"

const MyPosts = (props:any) => {

    // let postData = [
    //     {message: "Hello, this is my 1 post through the props", id: 1, likesCount:23},
    //     {message: "Hello, this is my 2message post through the props", id: 2, likesCount:25},
    //     {message: "Hello, this is my 3 post through the props", id: 3, likesCount:27},
    //
    // ]

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