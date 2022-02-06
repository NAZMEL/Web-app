const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  posts: [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: 'Well, and how are you?', likesCount: 12}  
  ],
  newPostText: '',
}

export const profileReducer = (state = initialState, action) =>{
    let stateCopy = {...state};

    switch(action.type){
      case ADD_POST:
        let newPost={
          id: 5,
          message: stateCopy.newPostText,
          likesCount: 0
        }
        
        stateCopy.posts = [...state.posts];
        console.log(typeof stateCopy.posts);
        stateCopy.posts.push(newPost);
        stateCopy.newPostText = '';
        return stateCopy;

      case UPDATE_NEW_POST_TEXT:
        stateCopy.newPostText = action.newText;
        return stateCopy;
        
      default:
        return stateCopy;
    }
}

export const addPostActionCreator = () => ({type : ADD_POST});
export const updataNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;