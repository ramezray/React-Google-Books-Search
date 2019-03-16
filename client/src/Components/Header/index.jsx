import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="container jumbotron jumbotron-fluid p-5 mb-0 ">
        <h3 className="display-4 justify-content-center">(React) Google Books Search</h3>
        <h4 className="card-text justify-content-center">Search for and Save Books of Interest</h4>
      </div>
    );
  }
}

export default Header;
