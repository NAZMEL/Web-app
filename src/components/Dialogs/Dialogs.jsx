import React from "react";
import { NavLink } from "react-router-dom";
import dialogsStyle from './Dialogs.module.css';


const DialogItem = (props) =>{
    let path = "/dialogs/" + props.id;

    return (
        <div className={dialogsStyle.dialog + ' '+ dialogsStyle.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) =>{

    return(
        <div className={dialogsStyle.message}>
        {props.message}
    </div>
    )
    
}


const Dialogs = (props) => {
    let dialogsData=[
        {id: 1, name: 'Nazar'},
        {id: 1, name: 'Nazar'},
        {id: 1, name: 'Nazar'},
        {id: 1, name: 'Nazar'},
        {id: 1, name: 'Nazar'},
        {id: 1, name: 'Nazar2'},
    ];

    let dialogsElements= dialogsData
        .map((dialog) => <DialogItem name={dialog.name} id={dialog.id} />);

    let messages=[
        {id: 1, message: 'Message'},
        {id: 1, message: 'Message 2'},
        {id: 1, message: 'Message 3'},
        {id: 1, message: 'Message 4'},
        {id: 1, message: 'Message 5'},
        {id: 1, message: 'Message 6'},
    ];

    let messagesElements = messages
        .map( message => <Message message={message.message}/>)

    return(
        <div className={dialogsStyle.dialogs}>
            <div className={dialogsStyle.dialogsItems}> 
               {dialogsElements}
            </div>

            <div className={dialogsStyle.dialogMessages}>
               {messagesElements}
            </div>
        </div>
    )
}


export default Dialogs;