import React from "react";
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

  let posts=[
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: 'Well, and how are you?', likesCount: 12}
  ]

  let postsElements = posts
      .map(post => <Post message={post.message} like={post.likesCount}/> );

    return (
        <div className={style.postBlock}>
        <h3>My posts</h3>
        <div>
          <div>
            <textarea></textarea>
          </div>
          <div>
            <button>Add post</button>
          </div>
          
        </div>

        <div className={style.posts}>
          {postsElements}
        </div>
      </div>
    )
}


export default MyPosts;