const ADD_NEWS = 'ADD-NEWS';
const UPDATE_NEW_NEWS_TITLE = 'UPDATE-NEW-NEWS-TITLE';
const UPDATE_NEW_NEWS_DESCRIPTION = 'UPDATE-NEW-NEWS-DESCRIPTION';

const newsReducer = (state, action) =>{
    switch(action.type){
      case ADD_NEWS:
        break;
      case UPDATE_NEW_NEWS_TITLE:
        break;
        case UPDATE_NEW_NEWS_DESCRIPTION:
            break;
    }
    return state;

    // if(action.type === ADD_POST){
    //     let newPost={
    //       id: 5,
    //       message: state.newPostText,
    //       likesCount: 0
    //     }
    
    //     state.posts.push(newPost);
    //     state.newPostText = '';
    //   }
    //   else if(action.type === UPDATE_NEW_POST_TEXT){
        
    //   }
      
    // return state;
}

export const addNewsCreator = () => ({type : ADD_NEWS});
export const updateNewNewsTitleCreator = (text) => ({type:UPDATE_NEW_NEWS_TITLE, newText: text});
export const updateNewNewsDescriptionCreator = (text) => ({type: UPDATE_NEW_NEWS_DESCRIPTION, newText: text});

export default newsReducer;