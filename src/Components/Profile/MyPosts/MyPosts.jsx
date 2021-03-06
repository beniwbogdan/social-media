import React from 'react';
import p from "./MyPosts.module.css"
import Post from "./Post/Post";
import {addPost} from "../../../redux/state";

export let newPostElementTextarea = React.createRef();

const MyPosts = (props) => {

    let newPostElementTextarea = React.createRef();

    let addPost = () => {
        let text = newPostElementTextarea.current.value;
        props.addPost(text);
        newPostElementTextarea.current.value = "";
    }

    return (
        <div>
            <div>
                My posts
                <div>
                    <textarea ref={newPostElementTextarea}></textarea>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>

            <div className={p.posts}>
                {
                    props.postData.map((w) => {
                        return (
                            <Post message={w.message} likeCounter={w.likesCount}/>
                        );
                    })
                }

            </div>
        </div>
    );
};

export default MyPosts;