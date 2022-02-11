import React from "react";
import { connect } from "react-redux";
import { usersAPI} from "../../api/users-api";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { followCreator, setUsersCreator, unFollowCreator, setCurrentPageCreator,
    setUsersTotalCountCreator, toggleIsFetchingCreator} from "../../redux/usersReducer";



class UsersContainer extends React.Component{

    componentDidMount(){
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data =>{
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
                this.props.toggleIsFetching(false);
            });
    }

    onPageChange = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data =>{
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
            });
    }

    onFollowUser = (userId) =>{
        usersAPI.followUser(userId).then(data =>{
            if(data.resultCode === 0){
                this.props.follow(userId);
            }
        });
    }

    onUnFollowUser = (userId) =>{
        usersAPI.unFollowUser(userId).then(data =>{
            if(data.resultCode === 0){
                this.props.unFollow(userId);
            }
        })
    }

    render(){
        return <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    follow={this.onFollowUser}
                    unFollow={this.onUnFollowUser}
                    onPageChange={this.onPageChange}
                />
        </>
    }
}

let mapStateToProps = (state) =>{
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
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
        toggleIsFetching: (isFething) => {
            dispatch(toggleIsFetchingCreator(isFething));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

