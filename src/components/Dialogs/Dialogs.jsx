import React from "react";
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let dialogsElements= props.dialogs
        .map((dialog) => <DialogItem name={dialog.name} id={dialog.id} img={dialog.img}/>);

    let messagesElements = props.messages
        .map( message => <Message message={message.message}/>)

    return(
        <div className={style.dialogs}>
            <div className={style.dialogsItems}> 
               {dialogsElements}
            </div>

            <div className={style.dialogMessages}>
               {messagesElements}
            </div>
        </div>
    )
}


export default Dialogs;