import React from 'react'
import Header from './Header'
import { getAuthUserData } from "../../redux/auth-reducer";
import { connect } from 'react-redux';
import Preloader from "../common/Preloader/Preloader";
// import { withAuthRedirect } from "../../hoc/withAuthRedirect";
// import { compose } from "redux";

export class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthUserData();
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
// export default compose(
//     connect(mapStateToProps, {
//         getAuthUserData,
//     }),
//     withAuthRedirect
// )(HeaderContainer);

export default connect(mapStateToProps, {
    getAuthUserData,
})(HeaderContainer);
