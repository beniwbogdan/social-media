import React, { Component } from 'react'
import Profile from './Profile';
import * as axios from "axios";
import { connect } from 'react-redux';
import { setUserProfile } from "../../redux/profile-reducer"

import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";

export class ProfileContainer extends Component {
    componentDidMount() {
        let userId = this.props.router.params.userId;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data);
            })
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
        profile: state.profilePage.profile
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


//let WithUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, { setUserProfile })(withRouter(ProfileContainer));
//export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);