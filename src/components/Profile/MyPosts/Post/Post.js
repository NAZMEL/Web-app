import React from "react";
import postStyle from './Post.module.css';


const Post = (props) => {

    return (
      <div className={postStyle.item}>
        <img src='https://image.shutterstock.com/image-photo/simple-easy-fast-solution-concept-260nw-1725113818.jpg'/>
        {props.message}
        <div>
           <span>{props.like}</span>
         </div>
      </div>
    )
}


export default Post;