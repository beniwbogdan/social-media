import React from 'react';
import p from "./Profile.module.css";
//import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from './MyPosts/Post/MyPostsContainer';

const Profile = (props: any) => {

    return (
        <div className={p.content}>
            <ProfileInfo />
            <MyPostsContainer
                store={props.store}
            // postData={props.profilePage.postData}
            // newPostText={props.profilePage.newPostText}
            // dispatch={props.dispatch}

            />
        </div>


    );
};

export default Profile;