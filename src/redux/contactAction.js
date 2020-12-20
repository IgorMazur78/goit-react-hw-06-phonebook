import uuid from "react-uuid";
import { createAction } from "@reduxjs/toolkit";

const addContact = createAction("contact/add", (name, number) => ({
  payload: {
    itemContact: { id: uuid(), name, number },
  },
}));

const deleteContact = createAction("contact/delete");

const filterContact = createAction("contact/filter");

export default {
  addContact,
  deleteContact,
  filterContact,
};
