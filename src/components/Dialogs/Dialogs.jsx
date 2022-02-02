import React from "react";
import {addMessageActionCreator, updateMessageActionCreator} from "../../redux/state";
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let dialogsElements= props.dialogs
        .map((dialog) => <DialogItem name={dialog.name} id={dialog.id} img={dialog.img}/>);
    let messagesElements = props.messages
        .map( message => <Message message={message.message}/>)
    
    let newMessage = React.createRef();

    let sendMessage = () => {
        let message = newMessage.current.value;
        if(message !== ""){
            let action = addMessageActionCreator();
            props.dispatch(action);
        }
    }

    let onMessageChange = () =>{
        let text = newMessage.current.value;
        console.log(text);
        let action = updateMessageActionCreator(text);
        props.dispatch(action);
    }

    return(
        <div className={style.dialogs}>
            <div className={style.dialogsItems}> 
               {dialogsElements}
            </div>
            <div className={style.dialogMessages}>
               {messagesElements}
            </div>
            <div>
                <div>
                    <textarea ref={newMessage} onChange={onMessageChange} value={props.newMessageText}></textarea>
                </div>
                <div>
                    <button onClick={sendMessage}>Send message</button>
                </div>
            </div>
        </div>
    )
}


export default Dialogs;