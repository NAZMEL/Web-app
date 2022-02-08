import React from "react";
import style from './Users.module.css';

let Users = (props) =>{
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for(let i = 1; i <= pagesCount; i++){
        if(pages.length < 15){
            pages.push(i);
        }
    }

    return (
    <div className={style.usersBlock}>
                <div className={style.navigationBlock}>
                    {pages.map(page => {
                        return(
                            <div className={props.currentPage === page && style.selectedPage + ' ' + style.pageNumber || style.pageNumber}
                            onClick={(e) => {props.onPageChange(page)}}>{page}</div>
                        )})}
                </div>

                {props.users.map(user => (
                    <div className={style.userItem} key={user.id}> 
                        <span className={style.userItemIdBlock}>User ID: {user.id}</span>
                        <span>
                            <div>
                                {/* <img className={style.userImg} src={user.imgUrl} alt="User image"/> */}
                                <img className={style.userImg} src={user.photos.small != null ? user.photos.small  : "https://cdn-icons-png.flaticon.com/512/149/149071.png"} alt="User image"/>
                            </div>
                            <div>
                                {user.followed 
                                ? <button onClick={() => {props.unFollow(user.id)}}>Unfollow</button> 
                                : <button onClick={() => {props.follow(user.id)}}>Follow</button>}
                            </div>
                        </span>
                        <span>
                            <span>
                                {/* <div>{user.fullName}</div> */}
                                <div>{user.name}</div>
                                <div>{user.status}</div>
                            </span>
                            <span>
                                {/* <div>{user.location.country}</div> */}
                                {/* <div>{user.location.city}</div> */}
                            </span>
                        </span>
                    </div>
                ))}
        </div>
    )
}

export default Users;