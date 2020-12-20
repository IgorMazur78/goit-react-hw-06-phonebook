import React from "react";
import { connect } from "react-redux";
import contactAction from "../../redux/contactAction";

import style from "./Listcontact.module.css";
import "./ListContactAnimation.css";

function ListContact({ contact, onDeleteContact }) {
  return (
    <ul>
      {contact.map(({ id, name, number }) => (
        <li key={id} className={style.ListContactItem}>
          <span>{name}:</span>
          <span>{number}</span>

          <button
            className={style.buttonDeleteContact}
            onClick={() => onDeleteContact(id)}
          ></button>
        </li>
      ))}
    </ul>
  );
}

const mapStateToProps = (state) => {
  const contacts = state.allContacts.itemContacts;
  const visibleContacts = contacts.filter((contact) => {
    const str = contact.name.toLowerCase();
    return str.includes(state.allContacts.filter.toLowerCase());
  });
  return {
    contact: visibleContacts,
  };
};
const mapDispatchToProps = {
  onDeleteContact: contactAction.deleteContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListContact);
