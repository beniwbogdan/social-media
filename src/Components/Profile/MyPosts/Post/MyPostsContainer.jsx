import { addPostsActionCreator, onPostChangeActionCreator } from "../../../../redux/profile-reducer";
import StoreContext from "../../../../StoreContext";
import MyPosts from '../MyPosts';

function MyPostsContainer() {

    return (
        <StoreContext.Consumer >
            {
                (store) => {
                    let state = store.getState();
                    let addPost = () => {
                        store.dispatch(addPostsActionCreator());
                    }

                    let onPostChange = (text) => {
                        let action = onPostChangeActionCreator(text);
                        store.dispatch(action);
                    }

                    return <MyPosts
                        updateNewPostText={onPostChange}
                        addPost={addPost}
                        postData={state.profilePage.postData}
                        newPostText={state.profilePage.newPostText} />
                }
            }

        </StoreContext.Consumer>

    )
}

export default MyPostsContainer