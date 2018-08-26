import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//Bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Contact from "./components/contact/contact";
import Header from "./components/layout/Header";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import AddContacts from "./components/contact/AddContact";
import editContact from "./components/contact/editContact";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Switch>
            <Route exact path="/" component={Contact} />
            <Route exact path="/contact/add" component={AddContacts} />
            <Route exact path="/contact/edit/:id" component={editContact} />
            <Route exact path="/contact/about" component={About} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
