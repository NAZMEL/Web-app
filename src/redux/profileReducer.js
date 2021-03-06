import { userProfileAPI } from "../api/profile-api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE-POST';

let initialState = {
  posts: [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: 'Well, and how are you?', likesCount: 12}  
  ],
  profile: null,
  status: '',
}

export const profileReducer = (state = initialState, action) =>{
    let stateCopy = {...state};

    switch(action.type){
      case ADD_POST:
        let newPost={
          id: 5,
          message: action.newMyPostText,
          likesCount: 0
        }
        
        stateCopy.posts = [...state.posts];
        stateCopy.posts.push(newPost);
        stateCopy.newPostText = '';
        return stateCopy;
      
      case SET_USER_PROFILE:
        return {...state, profile: action.profile};

      case SET_STATUS:
        return {
          ...state,
          status: action.status,
        }
      
      case DELETE_POST:
        return{
          ...state,
          posts: state.posts.filter(p => p.id != action.postId),
        }

      default:
        return stateCopy;
    }
}

export const addPostActionCreator = (newMyPostText) => ({type : ADD_POST, newMyPostText: newMyPostText});
export const setUserProfile = (profile) =>({type: SET_USER_PROFILE, profile: profile});
export const setStatus = (status) => ({type: SET_STATUS, status: status});
export const deletePost = (postId) => ({type: DELETE_POST, postId: postId});

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

export const saveProfile = (profile) => async(dispatch, getState) => {
  let data = await userProfileAPI.saveProfile(profile);
  //const userId = getState().auth.userId;
  const userId = 22384;
  if(data.resultCode === 0){
    dispatch(getUserProfile(userId));
  }
}

export default profileReducer;