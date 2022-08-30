import {
    followActionCreator,
    unfollowActionCreator,
    setUsersActionCreator,
    setCurrentPageActionCreator,
    setUsersTotalCountActionCreator,
    toggleIsFetchingActionCreator
} from "../../redux/user-reducer";
import React from 'react';
import { connect } from 'react-redux';
import * as axios from "axios";
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
            })

    }

    render() {
        return (

            <>
                {/* <div className={styles.Preloader}></div> */}
                {this.props.isFetching ? <Preloader /> : null}

                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    isFetching={this.props.isFetching}
                />
            </>
        );
    }
}
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => { dispatch(followActionCreator(userID)) },
        unfollow: (userID) => { dispatch(unfollowActionCreator(userID)) },
        setUsers: (users) => { dispatch(setUsersActionCreator(users)) },
        setCurrentPage: (pageNumber) => { dispatch(setCurrentPageActionCreator(pageNumber)) },
        setTotalUsersCount: (totalCount) => { dispatch(setUsersTotalCountActionCreator(totalCount)) },
        toggleIsFetching: (isFetching) => { dispatch(toggleIsFetchingActionCreator(isFetching)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);