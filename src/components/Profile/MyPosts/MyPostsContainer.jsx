import React from "react";
import { addPostActionCreator, updataNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {

    let addPost = () =>{
        let action = addPostActionCreator();
        props.dispatch(action);
    }

    let onPostChange = (text) =>{
      let action = updataNewPostTextActionCreator(text);
      props.dispatch(action);
    }

    return (<MyPosts addPost={addPost} updateNewPostText={onPostChange}
    posts={props.profilePage.posts}
    newPostText={props.profilePage.newPostText} />)
}


export default MyPostsContainer;