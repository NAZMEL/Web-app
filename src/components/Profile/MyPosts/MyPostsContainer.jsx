import React from "react";
import { addPostActionCreator, updataNewPostTextActionCreator} from "../../../redux/profileReducer";
import StoreContext from "../../../StoreContext";
import MyPosts from "./MyPosts";


const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>{
            (store) =>{
                let state = store.getState();

                let addPost = () =>{
                    let action = addPostActionCreator();
                    store.dispatch(action);
                }
            
                let onPostChange = (text) =>{
                  let action = updataNewPostTextActionCreator(text);
                  store.dispatch(action);
                }

                return(
                    <MyPosts addPost={addPost} 
                    updateNewPostText={onPostChange}
                    posts={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText}
                    />
                )}}
        </StoreContext.Consumer>
    )
}


export default MyPostsContainer;