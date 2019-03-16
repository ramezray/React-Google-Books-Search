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
          books: res.data
        })
      )
      .catch(err => console.log(err));
  };

  render() {
    
    return (
      <div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Saved Books</h1>
            <div className="card">
              {this.state.saveBooks.map(book =>(
                <div>
                  key={book._id}
                      title={book.title}
                      subtitle={book.subtitle}
                      link={book.link}
                      authors={book.authors.join(", ")}
                      description={book.description}
                      image={book.image}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SavedBooks;