import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
  _state: {
    posts: [
      {id: 1, message: 'Hi, how are you?', likesCount: 12},
      {id: 2, message: 'Well, and how are you?', likesCount: 12}  
    ],
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
    newPostText: '',
    newMessageText: '',
  },
  getState(){
    return this._state;
  },

  _callSubscriber(){
    console.log('It is store');
  },

  subscribe(observer){
    this._callSubscriber = observer;
  },

  dispatch(action){
    this._state = profileReducer(this._state, action);
    this._state = dialogsReducer(this._state, action);
    this._state = sidebarReducer(this._state, action);
    
    this._callSubscriber(this._state);
  }
}




export default store;
window.store = store;