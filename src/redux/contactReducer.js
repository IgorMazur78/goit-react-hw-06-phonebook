import { combineReducers } from "redux";
import contactAction from "./contactAction";
import { createReducer } from "@reduxjs/toolkit";

const initialСontacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const addContact = (state, { payload }) => {
  const prevContactNumber = state.some(
    (e) => e.number === payload.itemContact.number
  );
  if (
    !prevContactNumber &&
    payload.itemContact.name &&
    payload.itemContact.number
  )
    return [...state, payload.itemContact];
  if (prevContactNumber) {
    alert("такий контакт вже є");
  }
  if (payload.itemContact.name === "" || payload.itemContact.number === "") {
    alert("enter data");
  }

  return state;
};

const deleteContact = (state, { payload }) => {
  return state.filter((contact) => contact.id !== payload);
};

const itemContacts = createReducer(initialСontacts, {
  [contactAction.addContact]: addContact,
  [contactAction.deleteContact]: deleteContact,
});

const filter = createReducer("", {
  [contactAction.filterContact]: (state, { payload }) => payload,
});

export default combineReducers({
  itemContacts,
  filter,
});
