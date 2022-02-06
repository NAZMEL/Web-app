import { connect } from "react-redux";
import {addMessageActionCreator, updateMessageActionCreator} from "../../redux/dialogsReducer";
import Dialogs from './Dialogs';


let matStateToProps = (state) =>{
    return{
        dialogsPage: state.dialogsPage,
    }
}

let matDispatchToProps = (dispatch) =>{
    return{
        sendMessage:() => {
            let action = addMessageActionCreator();
            dispatch(action);
        },
        updateMessageChange:(text) =>{
            let action = updateMessageActionCreator(text);
            dispatch(action);
        }
    }
}

const DialogsContainer = connect(matStateToProps, matDispatchToProps)(Dialogs);

export default DialogsContainer;