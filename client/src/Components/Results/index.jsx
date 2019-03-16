import React, { Component } from "react";

class Results extends Component {
  state = {};
  render() {
    return (
      <div className="jumbotron jumbotron-fluid container card text-white bg-primary mb-3 p-3">
        <h4 className="display-4">Results</h4>
        {this.props.createDiv}
      </div>
    );
  }
}

export default Results;
