import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  FormControl,
  ControlLabel
} from "react-bootstrap";

import Card from "components/Card/Card.jsx";

import Checkbox from "components/CustomCheckbox/CustomCheckbox.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

class ValidationForms extends Component {
  constructor(props) {
    super(props);
    this.vForm = this.refs.vForm;
    this.state = {
      // Register
      email: "",
      password: "",
      cfpassword: "",
      emailError: null,
      passwordError: null,
      cfpasswordError: null,
      /// Login
      emailLogin: "",
      emailErrorLogin: null,
      passwordLogin: "",
      passwordErrorLogin: null,
      // Type
      type_text: "",
      type_textError: null,
      type_email: "",
      type_emailError: null,
      type_number: "",
      type_numberError: null,
      type_url: "",
      type_urlError: null,
      type_source: "",
      type_sourceError: null,
      type_destination: "",
      type_destinationError: null
    };
  }
  handleEmailChange(event) {
    this.setState({
      email: event.target.value
    });
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    re.test(event.target.value) === false
      ? this.setState({
          emailError: (
            <small className="text-danger">
              Email is required and format should be <i>john@doe.com</i>.
            </small>
          )
        })
      : this.setState({ emailError: null });
  }
  handlePasswordChange(event) {
    this.setState({
      password: event.target.value
    });
    event.target.value.length < 6
      ? this.setState({
          passwordError: (
            <small className="text-danger">
              You must enter a password of at least 6 characters.
            </small>
          )
        })
      : this.setState({ passwordError: null });
  }
  handleCfPasswordChange(event) {
    this.setState({
      cfpassword: event.target.value
    });
    event.target.value !== this.state.password
      ? this.setState({
          cfpasswordError: (
            <small className="text-danger">Passwords do not match.</small>
          )
        })
      : this.setState({ cfpasswordError: null });
  }
  handleRegisterSubmit() {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    re.test(this.state.email) === false
      ? this.setState({
          emailError: (
            <small className="text-danger">
              Email is required and format should be <i>john@doe.com</i>.
            </small>
          )
        })
      : this.setState({ emailError: null });
    this.state.password.length < 6
      ? this.setState({
          passwordError: (
            <small className="text-danger">
              You must enter a password of at least 6 characters.
            </small>
          )
        })
      : this.setState({ passwordError: null });
    this.state.cfpassword !== this.state.password
      ? this.setState({
          cfpasswordError: (
            <small className="text-danger">Passwords do not match.</small>
          )
        })
      : this.setState({ cfpasswordError: null });
  }
  handleLoginEmail(event) {
    this.setState({
      emailLogin: event.target.value
    });
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    re.test(event.target.value) === false
      ? this.setState({
          emailErrorLogin: (
            <small className="text-danger">
              Email is required and format should be <i>john@doe.com</i>.
            </small>
          )
        })
      : this.setState({ emailErrorLogin: null });
  }
  handleLoginPassword(event) {
    this.setState({
      passwordLogin: event.target.value
    });
    event.target.value.length < 6
      ? this.setState({
          passwordErrorLogin: (
            <small className="text-danger">
              You must enter a password of at least 6 characters.
            </small>
          )
        })
      : this.setState({ passwordErrorLogin: null });
  }
  handleLoginSubmit() {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    re.test(this.state.emailLogin) === false
      ? this.setState({
          emailErrorLogin: (
            <small className="text-danger">
              Email is required and format should be <i>john@doe.com</i>.
            </small>
          )
        })
      : this.setState({ emailErrorLogin: null });
    this.state.passwordLogin < 6
      ? this.setState({
          passwordErrorLogin: (
            <small className="text-danger">
              You must enter a password of at least 6 characters.
            </small>
          )
        })
      : this.setState({ passwordErrorLogin: null });
  }
  handleTypeValidation() {
    var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    emailRex.test(this.state.type_email) === false
      ? this.setState({
          type_emailError: (
            <small className="text-danger">
              Email is required and format should be <i>john@doe.com</i>.
            </small>
          )
        })
      : this.setState({ type_emailError: null });
    this.state.type_text === ""
      ? this.setState({
          type_textError: (
            <small className="text-danger">Text is required.</small>
          )
        })
      : this.setState({ type_textError: null });
    var digitRex = /^\d+$/;
    digitRex.test(this.state.type_number) === false
      ? this.setState({
          type_numberError: (
            <small className="text-danger">
              type_number has to be a number.
            </small>
          )
        })
      : this.setState({ type_numberError: null });
    var urlRex = /[-a-zA-Z0-9@:%_+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_+.~#?&//=]*)?/gi;
    urlRex.test(this.state.type_url)
      ? this.setState({ type_urlError: null })
      : this.setState({
          type_urlError: (
            <small className="text-danger">Must be a valid URL!</small>
          )
        });
    this.state.type_source === ""
      ? this.setState({
          type_sourceError: (
            <small className="text-danger">IdSource is required</small>
          )
        })
      : this.setState({ type_sourceError: null });
    this.state.type_source === this.state.type_destination
      ? this.setState({ type_destinationError: null })
      : this.setState({
          type_destinationError: (
            <small className="text-danger">IdSource mismatch!</small>
          )
        });
  }
  render() {
    return (
      <div className="main-content">
        <Grid fluid>
          <Row>
            <Col md={6}>
              <form>
                <Card
                  title="Send Email"
                  content={
                    <div>
                      <FormGroup>

                        <ControlLabel>
                          Email address: <span className="star">*</span>
                        </ControlLabel>
                        <FormControl
                          type="text"
                          name="email"
                          onChange={event => this.handleEmailChange(event)}
                        />
                        {this.state.emailError}
                      </FormGroup>



                      <div className="category">
                        <span className="star">*</span> Required fields
                      </div>

                      <Button
                        bsStyle="info"
                        fill
                        pullRight
                        onClick={this.handleRegisterSubmit.bind(this)}
                      >
                        Send
                      </Button>
                    </div>
                  }
                  legend={
                    <div>
                      <Checkbox number={1} label="Send a Link" />
                    </div>
                  }
                />

              </form>
            </Col>
            <Col md={6}>
              <form>
                <Card
                  textCenter
                  title="Download PDF"
                  content={
                    <div>
                     
                    </div>
                  }
                  ftTextCenter
                  legend={
                    <Button
                      bsStyle="info"
                      fill
                      wd
                      onClick={this.handleLoginSubmit.bind(this)}
                    >
                      Download
                    </Button>
                  }
                />
              </form>
            </Col>

            
          </Row>
        </Grid>
      </div>
    );
  }
}

export default ValidationForms;
