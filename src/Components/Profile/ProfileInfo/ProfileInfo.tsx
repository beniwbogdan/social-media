import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import p from "./ProfileInfo.module.css"
import userPhoto from "../../../assets/user.png"

const ProfileInfo = (props: any) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div>
                <img src="https://wallpaper.dog/large/20536905.jpg" alt="" />
            </div>
            <div className={p.descriptionBlock}>
                <img alt='profile pic' src={props.profile.photos.large ? props.profile.photos.large : userPhoto} /><br />
                <span><b>Name :</b> {props.profile.fullName}</span><br />
                <span><b>Describtion :</b> {props.profile.lookingForAJobDescription}</span><br />
                <span><b>Looking for job :</b>{props.profile.lookingForAJob ? " Yes" : " No, i`m working now"}</span><br />
                <span><b>Contacts:</b> </span>
                <ul>
                    <li><b>facebook : </b>{props.profile.contacts.facebook ? props.profile.contacts.facebook : "No have any links"}</li>
                    <li><b>twitter : </b>{props.profile.contacts.twitter ? props.profile.contacts.twitter : "No have any links"}</li>
                    <li><b>instagram : </b>{props.profile.contacts.instagram ? props.profile.contacts.instagram : "No have any links"}</li>
                    <li><b>github : </b>{props.profile.contacts.github ? props.profile.contacts.github : "No have any links"}</li>
                    <li><b>website : </b>{props.profile.contacts.website ? props.profile.contacts.website : "No have any links"}</li>
                </ul>
            </div>
        </div>
    );
};

export default ProfileInfo;