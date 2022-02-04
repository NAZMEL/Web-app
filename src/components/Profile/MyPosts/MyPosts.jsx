import React from "react";
import style from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, updataNewPostTextActionCreator} from "../../../redux/profileReducer";

const MyPosts = (props) => {
    let postsElements = props.posts
      .map(post => <Post message={post.message} like={post.likesCount}/> );
    let newPostText = props.newPostText;

    let newPostElement = React.createRef();
   
    let onAddPost = () =>{
      if(newPostText !== ''){
        props.addPost();
      }
    }

    let onPostChange = () =>{
      let text = newPostElement.current.value;
      props.updateNewPostText(text);
    }


    return (
        <div className={style.postBlock}>
        <h3>My posts</h3>
        <div>
          <div>
            <textarea ref={newPostElement} onChange={onPostChange} placeholder="Input your comment" value={newPostText}></textarea>
          </div>
          <div>
            <button onClick={onAddPost}>Add post</button>
          </div>
        </div>

        <div className={style.posts}>
          {postsElements}
        </div>
      </div>
    )
}


export default MyPosts;