import React from 'react';
import style from './Users.module.css';

let Users = (props) => {
    if(props.users.length === 0){
        props.setUsers([
            {id: 1, fullName: 'Dima', status: 'I\'m a boss', imgUrl:'https://www.thelawofattraction.com/wp-content/uploads/blog-Life-is-Good-Right-Now%E2%80%A6Here-are-8-Reasons-Why.jpg', followed: true, location: {city: 'IF', country: 'Urkaine'}},
        ])
    }
    
    return(
        <div>
            {props.users.map(user => (
                <div key={user.id}> 
                    <span>
                        <div>
                            <img className={style.userImg} src={user.imgUrl} alt="User image"/>
                        </div>
                        <div>
                            {user.followed 
                            ? <button onClick={() => {props.unFollow(user.id)}}>Unfollow</button> 
                            : <button onClick={() => {props.follow(user.id)}}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{user.fullName}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{user.location.country}</div>
                            <div>{user.location.city}</div>
                        </span>
                    </span>
                </div>
            ))}
        </div>
    )
}

export default Users;