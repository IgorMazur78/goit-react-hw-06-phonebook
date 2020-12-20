import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./contactReducer";

const store = configureStore({
  reducer: {
    allContacts: contactReducer,
  },
});

export default store;
