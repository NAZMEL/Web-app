import React from "react";
import style from './ProfileInfo.module.css';

const ProfileInfo = () =>{
    return(
      <div>
        <div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png" alt=""/>
        </div>

        <div className={style.descriptionBlock}>
          ava + description
        </div>
    </div>
    )
}

export default ProfileInfo;

