import React from "react";
import * as axios from "axios";
import { connect } from "react-redux";
import { useMatch } from "react-router-dom";
import Profile from "./Profile";
import {setUserProfile} from "./../../redux/profileReducer";


class ProfileContainer extends React.Component{
    constructor(props){
        super(props)
    }
    
    componentDidMount(){
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 2;
        }

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response =>{
                this.props.setUserProfile(response.data);
            });
    }
    
    render(){
        return <Profile  {...this.props} />       
    }
}

let mapStateToProps = (state) =>({
    profile: state.profilePage.profile,
})

let UrlDataContainerComponent = (props) =>{
    const match = useMatch('/profile/:userId/');
    return(
        <ProfileContainer {...props} match={match}/>
    )
}

export default connect(mapStateToProps, {setUserProfile})(UrlDataContainerComponent);