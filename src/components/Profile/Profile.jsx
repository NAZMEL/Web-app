import React from "react";
import profileStyle from './Profile.module.css';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) =>{
    return(
      <div>
        <ProfileInfo/>
        <MyPostsContainer profilePage={props.profilePage}
                dispatch={props.dispatch}
                />
    </div>
    )
}

export default Profile;