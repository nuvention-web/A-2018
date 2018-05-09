import React, { Component } from "react";
import { Grid, Col, Row } from "react-bootstrap";
// react component used to create charts
// import ChartistGraph from "react-chartist";
// react components used to create a SVG / Vector map
// import { VectorMap } from "react-jvectormap";

import Card from "components/Card/Card.jsx";
import StatsCard from "components/Card/StatsCard.jsx";
// import Tasks from "components/Tasks/Tasks.jsx";

import {  table_data
} from "variables/Variables.jsx";


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: '',
      expCount: 0,
      users: []
    };
    this.user = {
        users: [],
        modalIsOpen: false,
        name: '',
        email: '',
        msg: '',
        id: 0
    }
    // this.openModal = this.openModal.bind(this);
}
  handleEdit(event) {
    event.preventDefault();

  }
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ users: res }))
      .catch(err => console.log(err));

    this.getExperiennceCount()
      .then(res => this.setState({ expCount: res.exp }))
      .catch(err => console.log(err));

    this.getData()
      .then(res => this.setState({ users: res.exp }))
      .catch(err => console.log(err));      
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);
    console.log(body);
    return body;
  }
  getExperiennceCount = async () => {
    const response = await fetch('/api/getExperienceCount');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);
    console.log(body);
    return body;
  }

  getData = async () => {
    const response = await fetch('/api/showData');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);
    console.log(body);
    return body;
  }

  createTableData() {
    var tableRows = [];
    for (var i = 0; i < table_data.length; i++) {
      tableRows.push(
        <tr key={i}>
          <td>
            <div className="flag">
              <img src={table_data[i].flag} alt="us_flag" />
            </div>
          </td>
          <td>{table_data[i].country}</td>
          <td className="text-right">{table_data[i].count}</td>
          <td className="text-right">{table_data[i].percentage}</td>
        </tr>
      );
    }
    return tableRows;
  }
  render() {
    return (
      <div className="main-content">
        <Grid fluid>
          <Row>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-portfolio text-verid" />}
                statsText="Experience"

                statsValue="3"
                statsValue2="Pending: 1"
                statsIcon={<i className="fa fa-arrow-right" />}
                statsIconText="See all"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-study text-verid" />}
                statsText="Education"
                statsValue="0"
                statsValue2="Pending: 0"
                statsIcon={<i className="fa fa-arrow-right" />}
                statsIconText="See all"
              />
            </Col>
            
            
        {/*    <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-graph1 text-danger" />}
                statsText="Errors"
                statsValue="23"
                statsIcon={<i className="fa fa-clock-o" />}
                statsIconText="In the last hour"
              />
            </Col> 
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="fa fa-twitter text-info" />}
                statsText="Followers"
                statsValue="+45"
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Updated now"
              />
            </Col> */}
          </Row>
          <Row>
            <Col md={8}>
              <Card
                title="Recent Activity"
                content={
                  <Row>
                    <Col md={12}>
                      <div className="table-responsive">
                        <table className="table">
                          <tbody>{this.createTableData()}</tbody>
                        </table>
                      </div>
                    </Col>
                  
                  </Row>
                }
              />
            </Col>
  
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
