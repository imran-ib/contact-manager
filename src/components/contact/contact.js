import React, { Component } from "react";
import Contacts from "./contacts";
import { connect } from "react-redux";
import { getContacts } from "../../actions/contactActions";

class Contact extends Component {
  state = {};

  componentDidMount() {
    this.props.getContacts();
  }

  render() {
    const { contacts } = this.props;
    return (
      <div>
        {contacts.map(contact => (
          <Contacts
            id={contact.id}
            key={contact.id}
            name={contact.name}
            email={contact.email}
            phone={contact.phone}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.contact.contacts
});

export default connect(
  mapStateToProps,
  { getContacts }
)(Contact);
