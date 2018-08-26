import React, { Component } from "react";
import InpuFields from "../layout/inputFields";
import { connect } from "react-redux";
import { updateContact, getContact } from "../../actions/contactActions";

class AddContacts extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    error: {}
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getContact(id);
  }
  componentWillReceiveProps(nextProps, nextState) {
    const { name, email, phone } = nextProps.contact;
    this.setState({
      name,
      email,
      phone
    });
  }

  onSubmit = e => {
    e.preventDefault();
    const { name, email, phone } = this.state;
    const { id } = this.props.match.params;

    const newContact = {
      id,
      name,
      email,
      phone
    };

    this.props.updateContact(newContact);

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
        <div className="card-header">Edit Contact</div>

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
            Update
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contact: state.contact.contact
});

export default connect(
  mapStateToProps,
  { updateContact, getContact }
)(AddContacts);
