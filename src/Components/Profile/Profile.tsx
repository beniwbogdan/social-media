import React from 'react';
import "./Profile.module.css";
const p={
    "content":"Profile_content__Mzpov"
}
const Profile = () => {
    return (

        <div className={p.content}>
            <div>
                <img src="https://wallpaper.dog/large/20536905.jpg" alt=""/>
            </div>
            <div>ava + desc</div>
            <div>My posts
                <div>New post</div>
            </div>
            <div>
                <div>Post 1</div>
                <div>Post 2</div>
            </div>
        </div>


    );
};

export default Profile;