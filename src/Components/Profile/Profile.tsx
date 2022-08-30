import p from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from './MyPosts/Post/MyPostsContainer';

const Profile = (props: any) => {
    return (
        <div className={p.content}>
            <ProfileInfo profile={props.profile} />
            <MyPostsContainer />
        </div>


    );
};

export default Profile;