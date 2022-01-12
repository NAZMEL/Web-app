import React from "react";
import profileStyle from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";


const Profile = () =>{
    return(
      <div className={profileStyle.content}>
      <div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png" alt=""/>
      </div>

      <div>
        ava + description
      </div>
      <MyPosts/>
    </div>
    )
}

export default Profile;