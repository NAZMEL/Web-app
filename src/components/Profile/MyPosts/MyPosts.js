import React from "react";
import mypostStyle from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
        My posts
        <div>
          <textarea></textarea>
          <button>Add post</button>
        </div>

        <div>
          <Post message="Hi, how are you?" like="5"/>
          <Post message="Well, and how are you?" like="7"/>
          <Post/>
        </div>
      </div>
    )
}

export default MyPosts;