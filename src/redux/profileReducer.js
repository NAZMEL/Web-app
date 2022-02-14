import { userProfileAPI } from "../api/profile-api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_ID = 'SET-USER-ID';
const SET_STATUS = 'SET-STATUS';

let initialState = {
  posts: [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: 'Well, and how are you?', likesCount: 12}  
  ],
  newPostText: '',
  profile: null,
  status: '',
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
      
      case SET_USER_PROFILE:
        return {...state, profile: action.profile};

      case SET_STATUS:
        return {
          ...state,
          status: action.status,
        }

      default:
        return stateCopy;
    }
}

export const addPostActionCreator = () => ({type : ADD_POST});
export const updataNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const setUserProfile = (profile) =>({type: SET_USER_PROFILE, profile: profile});
export const setStatus = (status) => ({type: SET_STATUS, status: status});


export const getUserProfile = (userId) =>{
  return (dispatch) =>{
    userProfileAPI.getUserInfo(userId).then(data => { 
      dispatch(setUserProfile(data)); 
    });
  }
}

export const getStatus = (userId) => (dispatch) =>{
  userProfileAPI.getStatus(userId).then(data =>{
    dispatch(setStatus(data));
  })
}

export const updateStatus = (statusText) => (dispatch) =>{
  userProfileAPI.updateStatus(statusText).then(data =>{
    if(data.resultCode === 0){
      dispatch(setStatus(statusText));
    }
  })
}

export default profileReducer;