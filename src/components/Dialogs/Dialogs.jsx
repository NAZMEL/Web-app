import React from "react";
import dialogsStyle from './Dialogs.module.css';

const Dialogs = (props) => {
    return(
        <div className={dialogsStyle.dialogs}>
            <div className={dialogsStyle.dialogsItems}>
               
                <div className={dialogsStyle.dialog + ' '+ dialogsStyle.active}>
                    Nazar
                </div>
                <div className={dialogsStyle.dialog}>
                    Maria
                </div>
                <div className={dialogsStyle.dialog}>
                    Vlad
                </div>
                <div className={dialogsStyle.dialog}>
                    Vad
                </div>
            </div>

            <div className={dialogsStyle.dialogMessages}>
                <div className={dialogsStyle.message}>
                    message1
                </div>
                <div className={dialogsStyle.message}>
                    message2
                </div>
                <div className={dialogsStyle.message}>
                    message2
                </div>
            </div>
        </div>
    )
}


export default Dialogs;