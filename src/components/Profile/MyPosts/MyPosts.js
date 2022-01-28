import React from "react";
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postsElements = props.posts
      .map(post => <Post message={post.message} like={post.likesCount}/> );

    let newPostElement = React.createRef();

    let addPost = () =>{
      let text = newPostElement.current.value;
      if(text != ""){
        props.addPost(text);
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
            <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}></textarea>
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