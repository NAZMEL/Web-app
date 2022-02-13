import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { compose } from "redux";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";
import {addMessageActionCreator, updateMessageActionCreator} from "../../redux/dialogsReducer";
import Dialogs from './Dialogs';


class DialogsContainer extends React.Component{
    constructor(props){
        super(props);
    }    

    onSendMessage = () => {
        if(this.props.dialogsPage.newMessageText !== ''){
            this.props.sendMessage();
        }
    }

    onChangeMessage = (textMessage) => {
        this.props.updateMessageChange(textMessage);
    }

    render(){
        return(
            <Dialogs dialogsPage={this.props.dialogsPage}
                    onSendMessage={this.onSendMessage}
                    onChangeMessage={this.onChangeMessage}
                    isAuth={this.props.isAuth}/>
        )
    }
}

let matStateToProps = (state) =>{
    return{
        dialogsPage: state.dialogsPage,
    }
}

let matDispatchToProps = (dispatch) =>{
    return{
        sendMessage: () => {
            let action = addMessageActionCreator();
            dispatch(action);
        },
        updateMessageChange: (text) =>{
            debugger;
            let action = updateMessageActionCreator(text);
            dispatch(action);
        }
    }
}


export default compose(
    connect(matStateToProps, matDispatchToProps),
    WithAuthRedirect
)(DialogsContainer);
