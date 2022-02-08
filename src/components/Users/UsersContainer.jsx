import React from "react";
import { connect } from "react-redux";
import * as axios from 'axios';
import Users from './Users';
import { followCreator, setUsersCreator, 
    unFollowCreator, setCurrentPageCreator,
    setUsersTotalCountCreator } from "../../redux/usersReducer";


class UsersContainer extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response =>{
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response =>{
                this.props.setUsers(response.data.items);
            });
    }

    render(){
        return <Users totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    follow={this.props.follow}
                    unFollow={this.props.unFollow}
                    onPageChange={this.onPageChange}
                    />
    }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

