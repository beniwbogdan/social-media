import { followActionCreator, unfollowActionCreator, setUsersActionCreator, setCurrentPageActionCreator, setUsersTotalCountActionCreator } from "../../redux/user-reducer";
import UsersC from "./UserC"
import { connect } from 'react-redux';

let mapStateToProps = (state: any) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        follow: (userID: any) => { dispatch(followActionCreator(userID)) },
        unfollow: (userID: any) => { dispatch(unfollowActionCreator(userID)) },
        setUsers: (users: any) => { dispatch(setUsersActionCreator(users)) },
        setCurrentPage: (pageNumber: any) => { dispatch(setCurrentPageActionCreator(pageNumber)) },
        setTotalUsersCount: (totalCount: any) => { dispatch(setUsersTotalCountActionCreator(totalCount)) }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC);
export default UsersContainer