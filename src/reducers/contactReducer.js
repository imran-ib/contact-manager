import {
  GET_CONTACTS,
  DELETE_CONTACTS,
  ADD_CONTACTS,
  GET_CONTACT,
  UPDATE_CONTACTS
} from "../actions/types";
const initialState = {
  contacts: [],
  contact: {}
};
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload
      };
    case GET_CONTACT:
      return {
        ...state,
        contact: action.payload
      };
    case UPDATE_CONTACTS:
      return {
        ...state,
        contacts: state.contacts.map(
          contact =>
            contact.id === action.payload.id
              ? (contact = action.payload)
              : contact
        )
      };
    case ADD_CONTACTS:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };

    case DELETE_CONTACTS:
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => action.payload !== contact.id
        )
      };
    default:
      return state;
  }
}
