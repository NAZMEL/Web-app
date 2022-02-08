import React from 'react';
import style from './Users.module.css';
import * as axios from 'axios';

class Users extends React.Component{
    constructor(props){
        super(props);
        this.getUsers();
    }

    getUsers(){
        if(this.props.users.length === 0){
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response =>{
                this.props.setUsers(response.data.items);
        });
        }
    }

    render(){
        return(
            <div>
                {this.props.users.map(user => (
                    <div className={style.userItem} key={user.id}> 
                        <span className={style.userItemIdBlock}>User ID: {user.id}</span>
                        <span>
                            <div>
                                {/* <img className={style.userImg} src={user.imgUrl} alt="User image"/> */}
                                <img className={style.userImg} src={user.photos.small != null ? user.photos.small  : "https://cdn-icons-png.flaticon.com/512/149/149071.png"} alt="User image"/>
                            </div>
                            <div>
                                {user.followed 
                                ? <button onClick={() => {this.props.unFollow(user.id)}}>Unfollow</button> 
                                : <button onClick={() => {this.props.follow(user.id)}}>Follow</button>}
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
}

export default Users;