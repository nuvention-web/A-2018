import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

import { userActions } from '../_actions';

class ReportPage extends React.Component{

    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

    render(){
        const { user, users } = this.props;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h1>Your Report</h1>
                {user.firstName + ' ' + user.lastName}
                <p>
                    <Link to='/'>HomePage</Link>
                </p>
            </div>
        );
    }
}

//what's this--key problem
function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

const connectedReportPage = connect(mapStateToProps)(ReportPage);
export { connectedReportPage as ReportPage };