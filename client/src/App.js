import React, { Component } from 'react';
import "./App.css";
import NavBar  from "./Components/NavBar";
import Header  from "./Components/Header";
import Results  from "./Components/Results";
import Footer  from "./Components/Footer";
import axios from "axios";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '', createDiv: <div/>};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + this.state.value)
          .then((response)=>{
          this.setState({createDiv: 
            response.data.items.map(books => (
              <div className="card p-2 mb-2 text-primary" key={books.volumeInfo.title}>
              <span><h5 className="font-weight-bold "><u>Title:</u> {books.volumeInfo.title}</h5></span>
              <span><h5 className="font-weight-bold "><u>Authors:</u> {books.volumeInfo.authors}</h5></span>
              <span><h5 className="font-weight-bold "><u>Description:</u> </h5>{books.volumeInfo.description}</span>
              <span><img
                    src={(books.volumeInfo.imageLinks.thumbnail)}
                    className="card-img-top col-3"
                    alt={books.volumeInfo.title}
                    width="2px"
                    height="200px"
                  /></span>
              <span><a href={books.volumeInfo.infoLink} className="font-weight-bold ">Click Here for Book Link</a></span>
              <button className="btn btn-primary my-2 my-sm-0 float-right">Save</button>
              </div>
            ))
          })
      }
      )
      .catch((error)=>{
        this.setState({createDiv: <div className="font-weight-bold ">Sorry Can Not Find Book with this Title </div>})
      })
    event.preventDefault();
    this.setState({value:""})
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }


render() {
    return (
      <div >
        <NavBar/>
        <Header />
        <form onSubmit={this.handleSubmit} className="navbar navbar-expand-lg navbar-dark  justify-content-center">
          <input type="text" value={this.state.value} onChange={this.handleChange} className="form-control mr-sm-2"/>
          <input type="submit" value="Submit" className="btn btn-secondary my-2 my-sm-0"/>
        </form>
        <Results createDiv={this.state.createDiv} title={this.state.title} authors={this.state.authors} description={this.state.description} image={this.state.image} link={this.state.link}/>
        <Footer />
      </div>
    );
  }
}

export default App;
