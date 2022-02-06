import { connect } from "react-redux";
import { followCreator, setUsersCreator, unFollowCreator } from "../../redux/usersReducer";
import Users from "./Users";

let mapStateToProps = (state) =>{
    return{
        users: state.usersPage.users,
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        follow: (userId) =>{
            dispatch(followCreator(userId));
        },
        unFollow: (userId) =>{
            dispatch(unFollowCreator(userId));
        },
        setUsers: (users) =>{
            dispatch(setUsersCreator(users));
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;