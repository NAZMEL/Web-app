import React from "react";
import { connect } from "react-redux";
import { useMatch, Navigate } from "react-router-dom";
import Profile from "./Profile";
import { getUserProfile, getStatus, updateStatus } from "./../../redux/profileReducer";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";


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
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
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