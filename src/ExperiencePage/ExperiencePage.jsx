import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions'; //Delete Actions Needed

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class ExperiencePage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            experience: {
                company: '',
            },
            identity: this.props.user.id, // transfer the id
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        const { name, value } = event.target;
        const { experience } = this.state;
        this.setState({
            experience: {
                ...experience,
                [name]: value
            }
        });
    }

    handleSubmit(event){
        event.preventDefault();

        this.setState( { submitted: true } );
        const { experience, identity } = this.state;
        const { dispatch } = this.props;
        if (experience.company){
            dispatch(userActions.addExp(identity));
        }
    }

    render(){
        const { user } = this.props;
        const { experience, identity, submitted } = this.state
        //this.setState( { identity: user.id } );
        return (
            <div className="col-md-6 col-md-offset-3">
                 <h2>Add Experience</h2>
                 <p>{this.props.user.firstName + ' ' + this.props.user.lastName}</p>
                 <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !experience.company ?  ' has-error' : '')}>
                       <label htmlFor="company">Company</label>
                       <input type="text" className="form-control" name="company" value={experience.company} onChange={this.handleChange}/>
                       {submitted && !experience.company &&
                          <div className="help-block">Company is Required</div>
                       }
                    </div>
                    <div className="form-group">
                       <button className="btn btn-primary">Add</button>
                       <Link to="/report" className="btn btn-link">Cancel</Link>
                    </div>
                 </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { authentication } = state;
    const { user } = authentication;
    return {
        user
    };
}

const connectedExperiencePage = connect(mapStateToProps)(ExperiencePage);
export { connectedExperiencePage as ExperiencePage };
