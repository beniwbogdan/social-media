import React from 'react';
import p from "./MyPosts.module.css"
import Post from "./Post/Post";
import { addPostsActionCreator, onPostChangeActionCreator } from "../../../redux/profile-reducer";

export let newPostElementTextarea = React.createRef();

const MyPosts = (props) => {

    let newPostElementTextarea = React.createRef();

    let addPost = () => {
        props.dispatch(addPostsActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElementTextarea.current.value;
        props.dispatch(onPostChangeActionCreator(text));
    }

    return (
        <div>
            <div>
                My posts
                <div>
                    <textarea
                        onChange={onPostChange}
                        ref={newPostElementTextarea}
                        value={props.newPostText} />

                    <button onClick={addPost}>Add post</button>
                </div>
            </div>

            <div className={p.posts}>
                {
                    props.postData.map((w) => {
                        return (
                            <Post message={w.message} likeCounter={w.likesCount} />
                        );
                    })
                }

            </div>
        </div>
    );
};

export default MyPosts;