import React from 'react';
import p from "./ProfileInfo.module.css"
const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://wallpaper.dog/large/20536905.jpg" alt=""/>
            </div>
            <div className={p.descriptionBlock}>ava + desc</div>
        </div>
    );
};

export default ProfileInfo;