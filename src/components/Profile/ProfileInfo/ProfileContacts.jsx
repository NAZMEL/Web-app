import React from "react";
import Contact from "./Contacts";


const ProfileContacts = (props) => {
    return (
        <div>
            <b>Contacts:</b> {Object.keys(props.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={props.contacts[key]} />
            })}
        </div>
    )
}

export default ProfileContacts;