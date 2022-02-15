const ADD_MESSAGE = 'ADD-MESSAGE';
const ADD_MESSAGE_TEXT = 'ADD-MESSAGE-TEXT';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';

let initialState = {
  dialogs: [
    {id: 1, name: 'Nazar', img: 'https://image.shutterstock.com/image-photo/simple-easy-fast-solution-concept-260nw-1725113818.jpg'},
    {id: 1, name: 'Nazar', img: 'https://image.shutterstock.com/image-photo/simple-easy-fast-solution-concept-260nw-1725113818.jpg'},
    {id: 1, name: 'Nazar', img: 'https://image.shutterstock.com/image-photo/simple-easy-fast-solution-concept-260nw-1725113818.jpg'},
    {id: 1, name: 'Nazar', img: 'https://image.shutterstock.com/image-photo/simple-easy-fast-solution-concept-260nw-1725113818.jpg'},
    {id: 1, name: 'Nazar', img: 'https://image.shutterstock.com/image-photo/simple-easy-fast-solution-concept-260nw-1725113818.jpg'},
    {id: 1, name: 'Nazar', img: 'https://image.shutterstock.com/image-photo/simple-easy-fast-solution-concept-260nw-1725113818.jpg'},
    {id: 1, name: 'Nazar', img: 'https://image.shutterstock.com/image-photo/simple-easy-fast-solution-concept-260nw-1725113818.jpg'},
    {id: 1, name: 'Nazar', img: 'https://image.shutterstock.com/image-photo/simple-easy-fast-solution-concept-260nw-1725113818.jpg'},
  ],
  messages: [
    {id: 1, message: 'Message'},
    {id: 1, message: 'Message 2'},
    {id: 1, message: 'Message 3'},
    {id: 1, message: 'Message 4'},
    {id: 1, message: 'Message 5'},
    {id: 1, message: 'Message 6'},
  ],
  newMessageText: '',
}

const dialogsReducer = (state = initialState, action) =>{
  let stateCopy = {...state};

  switch(action.type){
    case ADD_MESSAGE:
      let newMessage = {
        id: 2,
        message: state.newMessageText,
      };

      stateCopy.messages = [...state.messages];
      stateCopy.messages.push(newMessage);
      stateCopy.newMessageText = '';
      break;

    case ADD_MESSAGE_TEXT:
      let newMessage2 = {
        id: 2,
        message: action.messageText,
      };

      stateCopy.messages = [...state.messages];
      stateCopy.messages.push(newMessage2);
      stateCopy.newMessageText = '';
      break;

    case UPDATE_MESSAGE:
      stateCopy.newMessageText = action.newMessageText;
      break;
  }
  
  return stateCopy;
}

// export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const addMessageActionCreator = (messageText) => ({type: ADD_MESSAGE_TEXT, messageText: messageText});
export const updateMessageActionCreator = (text) => ({type: UPDATE_MESSAGE, newMessageText: text});

export default dialogsReducer;