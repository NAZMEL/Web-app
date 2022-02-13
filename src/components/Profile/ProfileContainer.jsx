import React from "react";
import { connect } from "react-redux";
import { useMatch, Navigate} from "react-router-dom";
import Profile from "./Profile";
import {getUserProfile} from "./../../redux/profileReducer";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";


class ProfileContainer extends React.Component{
    constructor(props){
        super(props)
    }
    
    componentDidMount(){
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 2;
        }

        this.props.getUserProfile(userId);
    }
    
    render(){
        return <Profile  {...this.props} />       
    }
}

let mapStateToProps = (state) =>({
    profile: state.profilePage.profile,
})

let AuthRedirectComponent = WithAuthRedirect(ProfileContainer);

let UrlDataContainerComponent = (props) =>{
    const match = useMatch('/profile/:userId/');
    return(
        <AuthRedirectComponent {...props} match={match}/>
    )
}


export default connect(mapStateToProps, {
    getUserProfile,
})(UrlDataContainerComponent);