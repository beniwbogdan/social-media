import React, { Component } from 'react'
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile } from "../../redux/profile-reducer"
import { withAuthRedirect } from "../../hoc/withAuthRedirect"
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import { compose } from 'redux';


export class ProfileContainer extends Component {
    componentDidMount() {

        let userId = this.props.router.params.userId;

        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId);
    }
    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} />
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
}

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();

        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}


export default compose(
    connect(mapStateToProps, { getUserProfile }),
    withRouter,
    withAuthRedirect,
)(ProfileContainer);


