import React from "react";
import { connect } from "react-redux";
import { useMatch, Navigate } from "react-router-dom";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";
import { getUserProfile, getStatus, updateStatus } from "./../../redux/profileReducer";
import { getUserProfileSelector, getUserStatusSelector, getUserIdSelector, getUserIsAuthSelector } from "../../redux/profileSelector";
import Profile from "./Profile";



class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push('/login');
            }
        }
        
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return (
            <Profile  {...this.props} />
        )
    }

}

let mapStateToProps = (state) => ({
    profile: getUserProfileSelector(state),
    status: getUserStatusSelector(state),
    authorizedUserId: getUserIdSelector(state),
    isAuth: getUserIsAuthSelector(state),
})

let AuthRedirectComponent = WithAuthRedirect(ProfileContainer);

let UrlDataContainerComponent = (props) => {
    const match = useMatch('/profile/:userId/');

    if(!match) return <Navigate to='/login'/>
    return <ProfileContainer {...props} match={match} />
}


export default connect(mapStateToProps, {
    getUserProfile, getStatus, updateStatus,
})(UrlDataContainerComponent);