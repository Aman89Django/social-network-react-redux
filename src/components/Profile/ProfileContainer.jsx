import React from 'react';
import {connect} from 'react-redux';
import Profile from './Profile';
import {getUserProfile, getUserStatus, updateStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";



class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = 9660
        }

        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);

    };

    render() {
        return <Profile {...this.props} profile={this.props.profile} status={this.props.status} update={this.props.updateStatus} />
    }
};
//
// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);


let mapStateToProps = state => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
});

// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
//
//
// export default connect(mapStateToProps, {getProfile})(WithUrlDataContainerComponent);

export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)
(ProfileContainer);