import React from "react";
import {addMessageActionCreator, updateMessageActionCreator} from "../../redux/dialogsReducer";
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {

    let sendMessage = () => {
        let action = addMessageActionCreator();
        props.dispatch(action);
    }

    let onMessageChange = (text) =>{
        let action = updateMessageActionCreator(text);
        props.dispatch(action);
    }

    let onEnterPress = (e) =>{
        let code = (e.keyCode ? e.keyCode : e.which);
        if (code === 13) {
            let message = e.target.value;
            this.sendMessage(message);
        }
    }

    return(<Dialogs updateMessageChange={onMessageChange} 
                    sendMessage={sendMessage}
                    dialogsPage={props.dialogsPage} />)
}


export default DialogsContainer;