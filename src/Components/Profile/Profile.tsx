import React from 'react';
import p from  "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
//  const p={
//     "content":"Profile_content__Mzpov",
//
// }
const Profile = () => {
    return (

        <div className={p.content}>
            <div>
                <img src="https://wallpaper.dog/large/20536905.jpg" alt=""/>
            </div>
            <div>ava + desc</div>
            <MyPosts/>
        </div>


    );
};

export default Profile;