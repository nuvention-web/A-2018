import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

import { userActions } from '../_actions';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

function Experience(props){
    return (
        <p style={{color: "red"}}> 
          {props.value}
        </p>
    );
}

class ReportPage extends React.Component{

    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

    showExperince(expe){
        return <Experience value={expe.company} />
    }

    addExperience(user){
        this.props.dispatch(userActions.addExp(user.id));
    }

    render(){
        const { user } = this.props;
        //var Experiences = [];
        //for (let i  = 1; i < user.experiences.length; i++){
        //    Experiences.push(this.showExperince(i, user));
        //}
        //  const Experiences = user.experiences.map((expe) =>
        //     <p>{expe}</p>
        //  );
        
        return (
            <MuiThemeProvider>
                <div className="col-md-6 col-md-offset-3">
                    <h1>Your Report</h1>
                    {user.firstName + ' ' + user.lastName}
                    <FlatButton primary={true}>
                        <Link to='/'>HomePage</Link>
                    </FlatButton>
                    <p>{user.id}</p>
                    <Card>
                    <CardHeader title="URL Avatar" subtitle="Subtitle" avatar="images/jsa-128.jpg"/>
                    <CardMedia overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}>
                         <img src="images/nature-600-337.jpg" alt="" />
                     </CardMedia>
                     <CardTitle title="Card title" subtitle="Card subtitle" />
                     <CardText>
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                         Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                         Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                         Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                    </CardText>
                    <CardActions>
                        <FlatButton label="Action1" />
                        <FlatButton label="Action2" />
                    </CardActions>
                    </Card>
                    <div>
                        {user.experiences &&
                        <ul>
                            {user.experiences.map((item, index) =>
                                <li>
                                    {item}
                                </li>
                            )}
                        </ul>
                        }
                    </div>
                    <FlatButton primary={true}>
                        <Link to='/experience'>Add</Link>
                    </FlatButton>
                </div>
            </MuiThemeProvider>
        );
    }
}

//what's this--key problem
function mapStateToProps(state) {
    const { authentication } = state;
    const { user } = authentication;
    return {
        user //,
        //users
    };
}

const connectedReportPage = connect(mapStateToProps)(ReportPage);
export { connectedReportPage as ReportPage };