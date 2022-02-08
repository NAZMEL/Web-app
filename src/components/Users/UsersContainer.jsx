import { connect } from "react-redux";
import { followCreator, setUsersCreator, 
    unFollowCreator, setCurrentPageCreator,
    setUsersTotalCountCreator } from "../../redux/usersReducer";
import Users from "./Users";

let mapStateToProps = (state) =>{
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
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
        },
        setCurrentPage: (pageNumber) =>{
            dispatch(setCurrentPageCreator(pageNumber));
        },
        setTotalUsersCount: (totalCount) =>{
            dispatch(setUsersTotalCountCreator(totalCount));
        },
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;