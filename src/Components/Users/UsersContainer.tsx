import { followActionCreator, unfollowActionCreator, setUsersActionCreator } from "../../redux/user-reducer";
import Users from "./UserC"
import { connect } from 'react-redux';

let mapStateToProps = (state: any) => {
    return {
        users: state.usersPage.users,
        //  userId: state.userPage.users.id
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        follow: (userID: any) => { dispatch(followActionCreator(userID)) },
        unfollow: (userID: any) => { dispatch(unfollowActionCreator(userID)) },
        setUsers: (users: any) => { dispatch(setUsersActionCreator(users)) }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer