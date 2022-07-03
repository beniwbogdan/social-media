import React from 'react';
import p from  "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
//  const p={
//     "content":"Profile_content__Mzpov",
//
// }
const Profile = () => {
    return (

        <div className={p.content}>
            <ProfileInfo/>
            <MyPosts/>
        </div>


    );
};

export default Profile;