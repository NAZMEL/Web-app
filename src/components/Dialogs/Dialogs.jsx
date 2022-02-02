import React from "react";
import {addMessageActionCreator, updateMessageActionCreator} from "../../redux/dialogsReducer";
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let dialogsElements= props.dialogs
        .map((dialog) => <DialogItem name={dialog.name} id={dialog.id} img={dialog.img}/>);
    let messagesElements = props.messages
        .map( message => <Message message={message.message}/>)
    let newMessageText = props.newMessageText;

    let newMessage = React.createRef();

    let sendMessage = (e) => {
        let message = newMessage;
        if(message !== ""){
            let action = addMessageActionCreator();
            props.dispatch(action);
        }
    }

    let onMessageChange = (e) =>{
        let text = e.target.value;
        let action = updateMessageActionCreator(text);
        props.dispatch(action);
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
                <div>
                    <div>
                        <textarea ref={newMessage} onChange={onMessageChange} placeholder="Input message text" value={newMessageText}></textarea>
                    </div>
                    <div>
                        <button onClick={sendMessage}>Send message</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}


export default Dialogs;