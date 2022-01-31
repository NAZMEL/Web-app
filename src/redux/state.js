let store = {
  _state: {
    posts: [
      {id: 1, message: 'Hi, how are you?', likesCount: 12},
      {id: 2, message: 'Well, and how are you?', likesCount: 12}  
    ],
    newPostText: 'default text',
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
    ]
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
    if(action.type === 'ADD-POST'){
      let newPost={
        id: 5,
        message: this._state.newPostText,
        likesCount: 0
      }
  
      this._state.posts.push(newPost);
      this._state.newPostText = '';
      this._callSubscriber(this._state);
    }
    else if(action.type === 'UPDATE-NEW-POST-TEXT'){
      this._state.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  }
}


export default store;
window.store = store;