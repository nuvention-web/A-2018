import React, { Component } from "react";
import { Grid, Col, Row } from "react-bootstrap";
import ExperienceCard from "components/Card/ExperienceCard.jsx";

// react component used to create charts
// import ChartistGraph from "react-chartist";
// react components used to create a SVG / Vector map
// import { VectorMap } from "react-jvectormap";

// import Card from "components/Card/Card.jsx";
// import ExperienceCard from "components/Card/ExperienceCard.jsx";
// import Tasks from "components/Tasks/Tasks.jsx";

import {
  table_data
} from "variables/Variables.jsx";



class Dashboard extends Component {
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
            <Col lg={5} sm={9}>
              <ExperienceCard
                bigIcon={<i className="pe-7s-portfolio text-verid" />}
                statsText="B.S Economics"
                statsValue="University of Texas, Dallas"
                statsValue2="April 2009 &nbsp; - &nbsp; January 2012" 
                statsIcon={<i className="fa fa-close"  />}
                statsIconText= "Not Verified"
              />
          </Col>
            <Col lg={5} sm={9}>
              <ExperienceCard
                bigIcon={<i className="pe-7s-portfolio text-verid" />}
                statsText="M.S Product Design and Manufacture"
                statsValue="University of Texas, Dallas"
                statsValue2="February 2013 &nbsp; - &nbsp; April 2014" 
                statsIcon={<i className="fa fa-close"  />}
                statsIconText="Not Verified"
              />
          </Col> </Row>
 {/*  
  

            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-study text-verid" />}
                statsText="Education"
                statsValue="1"
                statsValue2="Pending: 1"
                statsIcon={<i className="fa fa-arrow-right" />}
                statsIconText="See all"
              />
            </Col>
            <Col lg={3} sm={6}>
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
            </Col> 
          </Row> */}
       
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
