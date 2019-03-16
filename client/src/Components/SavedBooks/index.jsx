import React, { Component } from "react";

class SavedBooks extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Saved Books</h1>
            <div className="card">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SavedBooks;