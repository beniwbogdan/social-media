import React from 'react';
import p from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = (props: any) => {

    let newPostElement: any = React.createRef();

    let onAddPost = () => {
        props.addPost();
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

export default MyPosts;