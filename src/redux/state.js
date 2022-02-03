import dialogsReducer from "./dialogsReducer";
import newsReducer from "./newsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";


let store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'Well, and how are you?', likesCount: 12}  
      ],
      newPostText: '',
    },
    dialogsPage: {
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
    },
    sidebar: {},
    newsPage:{
      news:[
        {id: 1, title: 'The first news', description: 'Here will be description'},
        {id: 2, title: 'The second news', description: 'Here will be description'},
        {id: 3, title: 'The third news', description: 'Here will be description'}
      ],
      newNewsTitle: '',
      newNewsDescription: '',
    }
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
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._state.newsPage = newsReducer(this._state.newsPage, action);
    
    this._callSubscriber(this._state);
  }
}

export default store;
window.store = store;