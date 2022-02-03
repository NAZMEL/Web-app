const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';

const dialogsReducer = (state, action) =>{

  switch(action.type){
    case ADD_MESSAGE:
      let newMessage = {
        id: 2,
        message: state.newMessageText,
      };

      state.messages.push(newMessage);
      state.newMessageText = '';
      break;
    case UPDATE_MESSAGE:
      state.newMessageText = action.newMessageText;
      break;
  }

  return state;
  
    // if(action.type === ADD_MESSAGE){
    //     let newMessage = {
    //       id: 2,
    //       message: state.newMessageText,
    //     };
  
    //     state.messages.push(newMessage);
    //     state.newMessageText = '';
    //   }
    //   else if(action.type === UPDATE_MESSAGE){
    //     state.newMessageText = action.newMessageText;
    //   }

    // return state;
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateMessageActionCreator = (text) => ({type: UPDATE_MESSAGE, newMessageText: text});

export default dialogsReducer;