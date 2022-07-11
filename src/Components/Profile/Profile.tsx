import React from 'react';
import p from  "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props:any) => {
    return (
        <div className={p.content}>
            <ProfileInfo/>
            <MyPosts addPost={props.addPost} postData={props.appState.postData} />
        </div>


    );
};

export default Profile;