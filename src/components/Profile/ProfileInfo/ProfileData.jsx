import React from "react";

const ProfileData = (props) => {
    return (
        <div>
            <div><button onClick={props.goToEditMode}>Edit</button></div>
            <div>
                Full name: {props.profile.fullName}
            </div>
            <div>
                Looking for a job: {props.profile.lookingForAJob ? "yes" : "no"}
            </div>
            {props.profile.lookingForAJob &&
                <div>
                    My professional skills: {props.profile.lookingForAJobDescription}
                </div>
            }
            {props.profile.aboutMe &&
                <div>
                    About me: {props.profile.aboutMe}
                </div>
            }
        </div>
    )
}

export default ProfileData;