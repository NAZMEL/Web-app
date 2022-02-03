import React from "react";
import style from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, updataNewPostTextActionCreator} from "../../../redux/profileReducer";


const MyPosts = (props) => {
    let postsElements = props.profilePage.posts
      .map(post => <Post message={post.message} like={post.likesCount}/> );
    let newPostText = props.profilePage.newPostText;

    let newPostElement = React.createRef();
   
    let addPost = () =>{
      let text = newPostElement.current.value;
      if(text !== ""){
        let action = addPostActionCreator();
        props.dispatch(action);
      }
    }

    let onPostChange = () =>{
      debugger;
      let text = newPostElement.current.value;
      let action = updataNewPostTextActionCreator(text);
      props.dispatch(action);
    }

    return (
        <div className={style.postBlock}>
        <h3>My posts</h3>
        <div>
          <div>
            <textarea ref={newPostElement} onChange={onPostChange} placeholder="Input your comment" value={newPostText}></textarea>
          </div>
          <div>
            <button onClick={addPost}>Add post</button>
          </div>
        </div>

        <div className={style.posts}>
          {postsElements}
        </div>
      </div>
    )
}


export default MyPosts;