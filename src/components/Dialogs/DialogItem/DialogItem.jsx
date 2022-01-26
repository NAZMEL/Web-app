import React from "react";
import { NavLink } from "react-router-dom";
import style from './../Dialogs.module.css';
import style2 from './DialogItem.module.css';


const DialogItem = (props) =>{
    let path = "/dialogs/" + props.id;

    return (
        <div className={style.dialog + ' '+ style.active}> 
            <img className={style2.userImg} src={props.img}/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


export default DialogItem;