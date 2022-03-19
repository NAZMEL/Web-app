import React, { useState } from "react";
import Preloader from "../../common/Preloader/Preloader";
import UserIconContainer from "../../common/UserIcon/UserIconContainer";
import ProfileStatusWithHook from "./ProfileStatusWithHook";
import style from "./ProfileInfo.module.css";
import ProfileData from "./ProfileData";
import ProfileContacts from "./ProfileContacts";
import ProfileDataFormReduxForm from "./ProfileDataForm";

const ProfileInfo = (props) => {
  let [editMode, setEditMode] = useState(false);

  if (!props.profile) {
    return (
      <Preloader />
    )
  }

  const onSubmit = (formData) =>{
    props.saveProfile(formData);
    setEditMode(false);
  }

  return (
    <div>
      <div className={style.userProfile}>
        <div className={style.profileSidebar}>
          <div className={style.userIdBlock}>User ID: {props.profile.userId}</div>
          <UserIconContainer imgPath={props.profile.photos.small} />
          <ProfileStatusWithHook status={props.status} updateStatus={props.updateStatus} />
          {editMode
            ? <ProfileDataFormReduxForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit} />
            : <ProfileData profile={props.profile} goToEditMode={() => {setEditMode(true)}}/>}
        </div>

        <div className={style.profileContacts}>
          <ProfileContacts contacts={props.profile.contacts} />
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;

