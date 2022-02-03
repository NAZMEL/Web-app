import React from "react";
import { NavLink } from "react-router-dom";
import style from './NewsItem.module.css';

const NewsItem = (props) =>{
    let path = "/news/" + props.id;

    return (
        <div>
            <div className={style.newsItemBlock}>
                <NavLink to={path} className={style.newsTitleBlock}>{props.title}</NavLink>
                <div className={style.newsDescriptionBlock}>{props.description}</div>
            </div>
        </div>
    )
}


export default NewsItem;