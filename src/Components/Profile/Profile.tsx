import React from 'react';
import p from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props: any) => {
    return (
        <div className={p.content}>
            <ProfileInfo />
            <MyPosts
                addPost={props.addPost}
                postData={props.profilePage.postData}
                newPostText={props.profilePage.newPostText}
                updateNewPostText={props.updateNewPostText} />
        </div>


    );
};

export default Profile;