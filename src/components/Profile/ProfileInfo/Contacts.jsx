import React from "react";


const Contact = (props) =>{
    return(
        <div>
            <b>{props.contactTitle}</b>: {props.contactValue}
        </div>
    )
}

export default Contact;