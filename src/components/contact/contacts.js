import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteConatct } from "../../actions/contactActions";
import { Link } from "react-router-dom";

export class Contacts extends Component {
  state = {
    showContent: false
  };

  removeContact = id => {
    this.props.deleteConatct(id);
  };
  hideShowContact = e => {
    this.setState({
      showContent: !this.state.showContent
    });
  };
  render() {
    const { id, name, email, phone } = this.props;
    return (
      <div className="card">
        <div className="card-header">
          Name: {name}
          <i
            style={{ cursor: "pointer" }}
            onClick={this.hideShowContact}
            className="fas fa-sort-down ml-2"
          />
          <i
            style={{ cursor: "pointer" }}
            onClick={this.removeContact.bind(this, id)}
            className="fas fa-trash-alt float-right"
          />
          <Link to={`/contact/edit/${id}`}>
            <i
              style={{ cursor: "pointer" }}
              className="fas fa-pencil-alt mr-2 float-right"
            />
          </Link>
        </div>
        {this.state.showContent ? (
          <div className="card-body">
            <ul className="list-group ">
              <li className="list-group-item">Email: {email}</li>
              <li className="list-group-item">Phone: {phone}</li>
            </ul>
          </div>
        ) : null}
      </div>
    );
  }
}

export default connect(
  null,
  { deleteConatct }
)(Contacts);
