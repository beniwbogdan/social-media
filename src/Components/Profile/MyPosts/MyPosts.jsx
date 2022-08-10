import React from 'react';
import p from "./MyPosts.module.css"
import Post from "./Post/Post";
export let newPostElementTextarea = React.createRef();

let addPostsActionCreator = () => ({
    type: "ADD-POST"
})
let onPostChangeActionCreator = (text) => ({
    type: "UPDATE-NEW-POST-TEXT",
    newText: text
})

const MyPosts = (props) => {

    let newPostElementTextarea = React.createRef();

    let addPost = () => {
        //  let text = newPostElementTextarea.current.value;
        //  let action = { type: "ADD-POST" };
        props.dispatch(addPostsActionCreator());

    }

    let onPostChange = () => {
        let text = newPostElementTextarea.current.value;
        //  let action = { type: "UPDATE-NEW-POST-TEXT", newText: text };
        props.dispatch(onPostChangeActionCreator(text));
    }

    return (
        <div>
            <div>
                My posts
                <div>
                    {/* <textarea ref={newPostElementTextarea}></textarea> */}
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