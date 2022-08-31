import React from 'react'
import Header from './Header'
import * as axios from "axios";
import { setUserData } from "../../redux/auth-reducer";
import { connect } from 'react-redux';

export class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
    }

    render() {
        return (
            <div><Header /></div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        data: state.auth.data,
        isFetching: state.auth.isFetching,
    }
}

export default connect(mapStateToProps, {
    setUserData
})(Header);

// export default HeaderContainer