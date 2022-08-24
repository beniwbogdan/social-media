import { followActionCreator, unfollowActionCreator, setUsersActionCreator } from "../../redux/user-reducer";
import Users from "./Users"
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        users: state.users,
        userId: state.users.id
    }
}
let mapDispatchToProps = (dispatch) => {
    return {

    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer