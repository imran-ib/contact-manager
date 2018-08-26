import React, { Component } from "react";
import InpuFields from "../layout/inputFields";
import { connect } from "react-redux";
import { addConatct } from "../../actions/contactActions";

class AddContacts extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    error: {}
  };

  onSubmit = e => {
    e.preventDefault();
    const { name, email, phone } = this.state;

    // Validations
    if (name === "") {
      this.setState({
        error: { name: "you must provide a name" }
      });
      return;
    }
    if (email === "") {
      this.setState({
        error: { email: "you must provide a email" }
      });
      return;
    }
    if (phone === "") {
      this.setState({
        error: { phone: "you must provide a phone" }
      });
      return;
    }

    const newContact = {
      name,
      email,
      phone
    };

    this.props.addConatct(newContact);

    console.log(this.state);

    this.setState({
      name: "",
      email: "",
      phone: "",
      error: {}
    });
    this.props.history.push("/");
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    const { name, email, phone, error } = this.state;
    return (
      <div className="card mt-5">
        <div className="card-header">Add Contact</div>

        <form onSubmit={this.onSubmit}>
          <InpuFields
            type="text"
            name="name"
            label="Name"
            placeholder=" Enter Name"
            value={name}
            onChange={this.onChange}
            error={error.name}
          />
          <InpuFields
            type="email"
            name="email"
            label="email"
            placeholder=" Enter Eamil"
            value={email}
            onChange={this.onChange}
            error={error.email}
          />
          <InpuFields
            type="text"
            name="phone"
            label="phone"
            placeholder=" Enter Phone"
            value={phone}
            onChange={this.onChange}
            error={error.phone}
          />

          <button type="submit" className="btn btn-primary float-right">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addConatct }
)(AddContacts);
