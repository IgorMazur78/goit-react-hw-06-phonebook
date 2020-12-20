import React from "react";
import Form from "./Component/Form/formEditor";
import ListContact from "./Component/ContactList/ListContact";
import Filter from "./Component/Filter/Filter";

function App() {
  return (
    <div className="App">
      <Form />
      <Filter />
      <ListContact />
    </div>
  );
}

export default App;
