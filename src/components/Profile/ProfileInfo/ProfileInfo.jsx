import React from "react";
import { NavLink } from "react-router-dom";
import Preloader from "../../common/Preloader/Preloader";
import UserIconContainer from "../../common/UserIcon/UserIconContainer";
import ProfileStatusWithHook from "./ProfileStatusWithHook";
import style from "./ProfileInfo.module.css";

const ProfileInfo = (props) =>{
    if(!props.profile){
      return(
        <Preloader/>
      )
    }

    return(
      <div>
        <div className={style.userProfile}>
          <div className={style.profileSidebar}>
            <div className={style.userIdBlock}>User ID: {props.profile.userId}</div>
              <UserIconContainer imgPath={props.profile.photos.small}/>
              <ProfileStatusWithHook status={props.status} updateStatus={props.updateStatus} />
            <div className={style.aboutMeBlock}>
              <span className={style.headSpan}>Name: </span> {props.profile.fullName}<br/>
              { props.profile.aboutMe && <><span className={style.headSpan}>Description: </span> {props.profile.aboutMe}</> }
            </div>
          </div>

          <div className={style.profileContacts}>
            <div className={style.profileContactsItem}>
              <span className={style.headSpan}>Facebook: </span>
              <NavLink to={props.profile.contacts.facebook != null
                            ? props.profile.contacts.facebook
                            : '/'}>{props.profile.contacts.facebook}</NavLink>
            </div>
            <div className={style.profileContactsItem}>
              <span className={style.headSpan}>Twitter: </span>
              <NavLink to={props.profile.contacts.twitter != null
                            ? props.profile.contacts.twitter
                            : '/'}>{props.profile.contacts.twitter}</NavLink>
            </div>
            <div className={style.profileContactsItem}>
              <span className={style.headSpan}>Instagram: </span>
              <NavLink to={props.profile.contacts.instagram != null 
                            ? props.profile.contacts.instagram
                            : '/'}>{props.profile.contacts.instagram}</NavLink>
            </div>
            <div className={style.profileContactsItem}>
              <span className={style.headSpan}>You Tube: </span>
              <NavLink to={props.profile.contacts.youtube != null 
                            ? props.profile.contacts.youtube 
                            : '/'}>{props.profile.contacts.youtube}</NavLink>
            </div>
          </div>
          
        </div>
    </div>
    )
}

export default ProfileInfo;

