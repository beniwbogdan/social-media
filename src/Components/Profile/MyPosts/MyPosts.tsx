import React from 'react';
import p from "./MyPosts.module.css"
import Post from "./Post/Post";
import { addPostsActionCreator } from "../../../redux/profile-reducer";



const MyPosts = (props: any) => {

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.dispatch(addPostsActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div>
            <div>
                My posts
                <div>
                    <textarea
                        onChange={onPostChange}
                        ref={newPostElement}
                        value={props.newPostText} />

                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>

            <div className={p.posts}>
                {
                    props.postData.map((w: any) => {
                        return (
                            <Post message={w.message} likeCounter={w.likesCount} />
                        );
                    })
                }

            </div>
        </div>
    );
};
export let newPostElement = React.createRef();
export default MyPosts;