import React from "react";
import { connect } from "react-redux";
import contactAction from "../../redux/contactAction"

import style from "./Filter.module.css"

 function Filter({value, onChange}) {
   
  return (
    <form className = {style.filter}>
      <h2 className = {style.filterTitle}>Find contacts by name</h2>
      <input
      className = {style.filterInput
      }
        type="text"
        name="filter"
        value={value}
        onChange={e => onChange(e.target.value)}
        
      />
    </form>
  );
}
const mapStateToProps = state => ({
  value: state.allContacts.filter
})
const mapDispatchtoProps = {
  onChange: contactAction.filterContact
}
export default connect(mapStateToProps,mapDispatchtoProps)(Filter);