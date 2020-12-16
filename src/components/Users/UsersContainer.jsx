import React from 'react'
import {connect} from "react-redux";
import {follow, setUsers, unfollow, toggleIsFetching, setTotalUsersCount, setCurrentPage} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader";
import {withRouter} from "react-router-dom";
import {userAPI} from "../../api/api";


class UsersContainer extends React.Component {

    componentDidMount() {
        userAPI.getUsers(this.props.currentPage,this.props.pageSize)
            .then(response => {
                this.props.setUsers(response.items);
                this.props.toggleIsFetching(false);
                this.props.setTotalUsersCount(response.totalCount);
            })
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        userAPI.getUsers(pageNumber,this.props.pageSize)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.items);
            });
    }

    render() {
        return <>
            { this.props.isFetching ? <Preloader /> : null }
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}


export default connect(mapStateToProps,
    {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching})(UsersContainer);
