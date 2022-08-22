import { addPostsActionCreator, onPostChangeActionCreator } from "../../../../redux/profile-reducer";

import MyPosts from '../MyPosts';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onPostChange: (text) => dispatch(onPostChangeActionCreator(text)),
        addPost: () => dispatch(addPostsActionCreator())
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer