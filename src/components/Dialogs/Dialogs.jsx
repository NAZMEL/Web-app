import React from "react";
import {Navigate} from "react-router-dom"
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let dialogsElements= props.dialogsPage.dialogs
        .map((dialog) => <DialogItem name={dialog.name} id={dialog.id} img={dialog.img}/>);
    let messagesElements = props.dialogsPage.messages
        .map( message => <Message message={message.message}/>)
    let newMessageText = props.dialogsPage.newMessageText;

    
    if(!props.isAuth){
        return <Navigate to='/login'/>
    }

    return(
        <div className={style.dialogs}>
            <div className={style.dialogsItems}> 
               {dialogsElements}
            </div>
            <div className={style.dialogMessages}>
               <div>
                   {messagesElements}
                </div>
                <div className={style.dialogsMessagesAddMessageBlock}>
                    <div >
                        <textarea className={style.dialogsMessagesTextArea} 
                                    onChange={(e) => {props.onChangeMessage(e.target.value)}} 
                                    placeholder="Input message text" 
                                    value={newMessageText}></textarea>
                    </div>
                    <div>
                        <button onClick={() => props.onSendMessage()}>Send message</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}


export default Dialogs;