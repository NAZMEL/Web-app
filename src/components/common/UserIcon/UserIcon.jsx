import style from "./UserIcon.module.css";

let UserIcon = (props) =>{
    return(
        <div>
            <img className={style.userImg} src={props.imgPath}/>
        </div>
    )
}

export default UserIcon;