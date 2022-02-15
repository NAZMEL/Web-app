import React from "react";
import style from './MyPosts.module.css';
import Post from './Post/Post';
import MyPostFormRedux from "./MyPostsForm";


const MyPosts = (props) => {
  let postsElements = props.posts
    .map(post => <Post message={post.message} like={post.likesCount} />);

  let onAddPost = (values) => {
    if (values.newMyPostText !== '') {
      props.addPost(values.newMyPostText);
      values.newMyPostText = '';
    }
  }

  return (
    <div className={style.postBlock}>
      <h3>My posts</h3>
      <div>
        <MyPostFormRedux onSubmit={onAddPost} />
      </div>

      <div className={style.posts}>
        {postsElements}
      </div>
    </div>
  )
}


export default MyPosts;