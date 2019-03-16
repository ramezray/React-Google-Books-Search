import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar  from "./Components/NavBar";
import Header  from "./Components/Header";
import Footer  from "./Components/Footer";
import SearchBooks from "./pages/SearchBooks";
import SavedBooks from "./pages/SavedBooks";
import NoMatch from "./pages/NoMatch";

class App extends Component {
  


render() {
    return (
      <Router>
      <div >
        <NavBar />
        <Header />
        <Switch>
          <Route exact path="/books" component={SearchBooks} />
          <Route exact path="/books" component={SearchBooks} />
          <Route exact path="/Savedbooks" component={SavedBooks} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
