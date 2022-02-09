import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import style from './ProfileInfo.module.css';

const ProfileInfo = (props) =>{
    if(!props.profile){
      return(
        <Preloader/>
      )
    }

    return(
      <div>
        <div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png" alt=""/>
        </div>

        <div className={style.descriptionBlock}>
          <img src={props.profile.photos.small} />
          <div>
            description
          </div>
        </div>
    </div>
    )
}

export default ProfileInfo;

