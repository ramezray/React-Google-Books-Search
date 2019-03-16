import React, { Component } from "react";
import axios from "axios";
import Results from "../Components/Results";
import API from "../utils/API";

class SearchBooks extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "", createDiv: <div />, books: [] };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    this.setState({ createDiv: <div /> });
    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=" + this.state.value)
      .then(response => {
        this.setState({
          createDiv: response.data.items.map(books => (
            <div className="card p-2 mb-4 text-primary" key={books.id}>
              <span>
                <h5 className="font-weight-bold ">
                  <u>Title:</u> {books.volumeInfo.title}
                </h5>
              </span>
              <span>
                <h5 className="font-weight-bold ">
                  <u>Authors:</u> {books.volumeInfo.authors}
                </h5>
              </span>
              <span>
                <h5 className="font-weight-bold ">
                  <u>Description:</u>
                </h5>
                {books.volumeInfo.description}
              </span>
              <span>
                <img
                  src={books.volumeInfo.imageLinks.thumbnail}
                  className="card-img-top col-3"
                  alt={books.volumeInfo.title}
                  width="2px"
                  height="200px"
                />
              </span>
              <span>
                <a
                  href={books.volumeInfo.infoLink}
                  className="font-weight-bold "
                  // target="_blank"
                >
                  Click Here for Book Link
                </a>
              </span>
              <button
                className="btn btn-primary my-2 my-sm-0 float-right"
                onClick={(id) => {
                  // const book = this.state.books.find(book => books.id === id);
                  API.saveBook({
                    googleId: books.id,
                    title: books.volumeInfo.title,
                    authors: books.volumeInfo.authors,
                    description: books.volumeInfo.description,
                    image: books.volumeInfo.imageLinks.thumbnail,
                    link: books.volumeInfo.infoLink
                  }).then(alert("Book is Saved"));
                }}
              >
                Save
              </button>
            </div>
          ))
        });
      })
      .catch(error => {
        this.setState({
          createDiv: (
            <div className="font-weight-bold ">
              Sorry Can Not Find Book with this Title
            </div>
          )
        });
      });
    event.preventDefault();
    this.setState({ value: "" });
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  render() {
    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
          className="navbar navbar-expand-lg navbar-dark  justify-content-center"
        >
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            className="form-control mr-sm-2 "
          />
          <input
            type="submit"
            value="Submit"
            className="btn btn-secondary my-2 my-sm-0"
          />
        </form>
        <Results createDiv={this.state.createDiv} />
      </div>
    );
  }
}

export default SearchBooks;
