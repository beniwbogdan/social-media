import { addPostsActionCreator, onPostChangeActionCreator } from "../../../../redux/profile-reducer";
import MyPosts from '../MyPosts';

//export let newPostElementTextarea = React.createRef();

function MyPostsContainer(props: any) {

    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostsActionCreator());
    }

    let onPostChange = (text: any) => {
        let action = onPostChangeActionCreator(text);
        props.store.dispatch(action);
    }

    return (
        <MyPosts
            updateNewPostText={onPostChange}
            addPost={addPost}
            postData={state.profilePage.postData}
            newPostText={state.profilePage.newPostText} />
    )
}

export default MyPostsContainer