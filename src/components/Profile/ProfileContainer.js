import React from 'react'
import {connect} from "react-redux";
import {getProfileInfo, getProfileStatus, setProfileStatus, setUserProfile} from "../../redux/profile-reducer";
import * as axios from "axios";
import Profile from "./Profile";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.getProfileInfo(this.props.match.params.userId);
        this.props.getProfileStatus(this.props.match.params.userId)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.userId != this.props.match.params.userId) {
            debugger
            this.props.getProfileInfo(this.props.match.params.userId);
            this.props.getProfileStatus(this.props.match.params.userId)
        }

    }


    render() {
        return <>
            <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                     updateStatus={this.props.setProfileStatus}/>
        </>
    }
}


const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

export default compose(
    connect(mapStateToProps, {getProfileInfo, getProfileStatus, setProfileStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);