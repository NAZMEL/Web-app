import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { follow, unFollow, setCurrentPage,
 toggleIsFollowingProgress, getUsers} from "../../redux/usersReducer";
import { getUsersSelector,  getPageSize, getTotalUsersCount, 
    getCurrentPage, getIsFetching, getFollowingInProgress,
    getPortionSize } from "../../redux/usersSelector";



class UsersContainer extends React.Component{

    componentDidMount(){
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChange = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render(){
        return <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    portionSize={this.props.portionSize}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    follow={this.props.follow}
                    unFollow={this.props.unFollow}
                    onPageChange={this.onPageChange}
                    followingInProgress={this.props.followingInProgress}
                />
        </>
    }
}

let mapStateToProps = (state) =>{
    return{
        users: getUsersSelector(state),
        pageSize: getPageSize(state),
        portionSize: getPortionSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export default compose(
    connect(mapStateToProps, {
        getUsers, setCurrentPage, toggleIsFollowingProgress, follow, unFollow
    })
)(UsersContainer);

