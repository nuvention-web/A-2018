import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl,
} from "react-bootstrap";

import Card from "components/Card/Card.jsx";

import Button from "components/CustomButton/CustomButton.jsx";

class RegularForms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      radio: "1",
      radioVariant: "1"
    };
  }
  handleRadio = event => {
    const target = event.target;
    this.setState({
      [target.name]: target.value
    });
  };
  render() {
    return (
      <div className="main-content">
        <Grid fluid>
          <Row>
            <Col md={6}>
              <Card
                title="Add Experience"
                content={
                  <form>
                    <FormGroup>
                      <ControlLabel>Degree</ControlLabel>
                      <FormControl placeholder="Enter Degree Obtained" type="degree" />
                    </FormGroup>
                    <FormGroup>
                      <ControlLabel>University</ControlLabel>
                      <FormControl placeholder="Enter University Name" type="compname" />
                    </FormGroup>
                    <FormGroup>
                      <ControlLabel>To Date</ControlLabel>
                      <FormControl placeholder="MM/DD/YYYY" type="todate" />
                    </FormGroup>
                    <FormGroup>
                      <ControlLabel>From Date</ControlLabel>
                      <FormControl placeholder="MM/DD/YYYY" type="fromdate" />
                    </FormGroup>
                    <FormGroup>
                      <ControlLabel>Verifier Email</ControlLabel>
                      <FormControl placeholder="Enter Verifier Email" type="verifieremail" />
                    </FormGroup>
                    
                    <Button bsStyle="info" fill>
                      Submit
                    </Button>
                  </form>
                }
              />
            </Col>
            
            
          </Row>
        </Grid>
      </div>
    );
  }
}

export default RegularForms;
