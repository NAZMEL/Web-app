import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Users.module.css";
import UserIconContainer from "./../common/UserIcon/UserIconContainer";
import Paginator from "./Paginator";

let Users = (props) => {
    return (
        <div className={style.usersBlock}>
            <Paginator {...props} />

            {props.users.map(user => (
                <div className={style.userItem} key={user.id}>
                    <span className={style.userItemIdBlock}>User ID: {user.id}</span>
                    <span>
                        <div>
                            <NavLink to={`/profile/${user.id}`}>
                                <UserIconContainer imgPath={user.photos.small} />
                            </NavLink>
                        </div>
                        <div>
                            {user.followed
                                ? <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => { props.unFollow(user.id); }}>Unfollow</button>
                                : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => { props.follow(user.id); }}>Follow</button>}
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