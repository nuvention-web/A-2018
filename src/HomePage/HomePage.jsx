import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

import MyAwesomeReactComponent from './MyAwesomeReactComponent';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

class HomePage extends React.Component {
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

    handleDeleteUser(id) {
        return (e) => this.props.dispatch(userActions.delete(id));
    }

    render() {
        let styleOj = {
            //backgroundColor: "white",
            color: "red",
        }
        let styleReport = {
            //display: "table",
            fontFamily: "monospace",
        }
        let styleExperience = {
             margin: "10px 0px 15px 5px",
             //display: "inline-block",
        }
        let styleJump = {
            display: "inline-block",
            margin: "15px",
        }
        const Test = () => (
            <MuiThemeProvider>
              <MyAwesomeReactComponent />
            </MuiThemeProvider>
          );
        const { user, users } = this.props;
        return (
            <MuiThemeProvider>
                <div>
                    <h1 style = {styleOj}>Hi {user.firstName}!</h1>
                    <p>You're logged in with VerID!!</p>
                    <AppBar title="All registered users:" iconClassNameRight="muidocs-icon-navigation-expand-more"/>
                    <div>
                        {users.loading && <em>Loading users...</em>}
                        {users.error && <span className="text-danger">ERROR: {users.error}</span>}
                        {users.items &&
                            <div style = {styleReport}>
                                {users.items.map((user, index) =>
                                    <Card key={user.id} style = {styleExperience}>
                                       <CardHeader title={user.firstName + ' ' + user.lastName} subtitle="Subtitle" 
                                                   actAsExpander={true} showExpandableButton={true}/>                                    
                                        <CardText expandable={true}>
                                            Learn CSS, HTML to improve the effect of website.                                       
                                            {
                                            user.deleting ? <em> - Deleting...</em>
                                            : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
                                            : <span> - <a onClick={this.handleDeleteUser(user.id)}>Delete</a></span>
                                            }
                                        </CardText>
                                    </Card>
                                )}
                            </div>
                        }
                    </div>
                    <div style = {styleJump}>
                        <FlatButton primary={true}>
                            <Link to="/login">Logout</Link>
                        </FlatButton>
                        <FlatButton primary={true}>
                            <Link to="/report">Report</Link>
                        </FlatButton>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };