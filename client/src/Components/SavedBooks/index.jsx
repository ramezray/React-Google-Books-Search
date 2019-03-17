import React, { Component } from "react";
import API from "../../utils/API"

class SavedBooks extends Component {
  state = {saveBooks:[]};
  componentDidMount() {
    this.getSavedBooks();
  }

  getSavedBooks = () => {
    API.getSavedBooks()
      .then(res =>
        this.setState({
          saveBooks: res.data
        })
      )
      .catch(err => console.log(err));
  };
  handleBookDelete = id => {
    API.deleteBook(id).then(res => this.getSavedBooks());
  };


  render() {
    
    return (
      <div className="jumbotron jumbotron-fluid container card text-white bg-primary mb-3 p-3">
        <h4 className="display-4">Saved Books</h4>
            <div className="card">
              {this.state.saveBooks.map(book =>(
                <div
                className="card p-2 mb-4 text-primary"
                key={book._id}
              >
                <span>
                  <h5 className="font-weight-bold ">
                    <u>Title:</u> {book.title}
                  </h5>
                </span>
                <span>
                  <h5 className="font-weight-bold ">
                    <u>Authors:</u> {book.authors}
                  </h5>
                </span>
                <span>
                  <h5 className="font-weight-bold ">
                    <u>Description:</u>
                  </h5>
                  {book.description}
                </span>
                <span>
                  <img
                    src={book.image}
                    className="card-img-top col-3"
                    alt={book.title}
                    width="2px"
                    height="200px"
                  />
                </span>
                <span>
                  <a
                    href={book.link}
                    className="font-weight-bold "
                    target="_blank"
                  >
                    Click Here for Book Link
                  </a>
                </span>
                <button className="btn btn-danger my-2 my-sm-0 float-right" onClick={() => this.handleBookDelete(book._id)}>
                  Delete
                </button>
              </div>
              ))}
            </div>
          </div>
    );
  }
}

export default SavedBooks;