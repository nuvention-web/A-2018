import React, { Component } from "react";

export class StatsCard extends Component {
  render() {
    return (
      <div className="card card-stats2">
        <div className="content">
          <div className="row">
            
            <div className="col-xs-12">
              <div className="numbers">
                {this.props.statsText}
               
              </div>
               <div className="numbers2">
                {this.props.statsValue}
              </div>
            </div>

            <div className="col-xs-12">
            <div className="names">
                {this.props.statsValue2}
              </div></div>
              
              
          </div>
        </div>
        <div className="footer">
          <hr />
          <div className="stats">
            {this.props.statsIcon} {this.props.statsIconText}
          </div>
        </div>
      </div>
    );
  }
}

export default StatsCard;
