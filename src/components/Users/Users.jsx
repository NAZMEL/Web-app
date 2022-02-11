import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Users.module.css";
import UserIconContainer from "./../common/UserIcon/UserIconContainer";
import axios from "axios";

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
                                <NavLink to={`/profile/${user.id}`}>
                                    <UserIconContainer imgPath={user.photos.small}/>
                                </NavLink>
                            </div>
                            <div>
                                {user.followed 
                                ? <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                    props.toggleIsFollowingProgress(true, user.id);
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                                        withCredentials: true,
                                        headers:{
                                            "API-KEY": '31438ad6-6e7e-4774-9744-3b6df5ed67e1'
                                        }}).then(response => {
                                            if(response.data.resultCode === 0){
                                                props.unFollow(user.id);
                                            }
                                            props.toggleIsFollowingProgress(false, user.id);
                                        })
                                }}>Unfollow</button> 
                                : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                    props.toggleIsFollowingProgress(true, user.id);
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                                        withCredentials: true,
                                        headers:{
                                            "API-KEY": '31438ad6-6e7e-4774-9744-3b6df5ed67e1'
                                        }}).then(response => {
                                            if(response.data.resultCode === 0){
                                                props.follow(user.id);
                                            }
                                            props.toggleIsFollowingProgress(false, user.id);
                                    })
                                }}>Follow</button>}
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{user.name}</div>
                                <div>{user.status}</div>
                            </span>
                        </span>
                    </div>
                ))}
        </div>
    )
}

export default Users;