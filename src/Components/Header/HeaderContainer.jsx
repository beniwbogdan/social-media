import React from 'react'
import Header from './Header'
import * as axios from "axios";
import { setAuthUserData } from "../../redux/auth-reducer";
import { toggleIsFetching } from "../../redux/user-reducer";
import { connect } from 'react-redux';
import Preloader from "../common/Preloader/Preloader";
export class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true
        })
            .then(response => {
                this.props.toggleIsFetching(false);
                if (response.data.resultCode === 0) {
                    let { id, login, email } = response.data.data;
                    this.props.setAuthUserData(id, login, email);
                }
            })
    }

    render() {
        return (
            <div>
                {this.props.isFetching ? <Preloader /> : <Header {...this.props} />}</div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        isFetching: state.auth.isFetching,
    }
}

export default connect(mapStateToProps, {
    setAuthUserData,
    toggleIsFetching
})(HeaderContainer);

// export default HeaderContainer