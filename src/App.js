import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import styled from "styled-components";
import ContactList from "./components/ContactList";

const AppStyled = styled.div`
  font-family: "Roboto", sans-serif;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  h1 {
    grid-column-start: 1;
    grid-column-end: -1;
    text-align: center;
    text-transform: uppercase;
  }
`;

function App() {
  let initialContacts = JSON.parse(localStorage.getItem("contacts"));
  if (!initialContacts) {
    initialContacts = [];
  }

  const [contacts, setContacts] = useState(initialContacts);

  const createContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const deleteContact = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
  };

  useEffect(() => {
    if (initialContacts) {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    } else {
      localStorage.setItem("contacts", JSON.stringify([]));
    }
  }, [contacts, initialContacts]);

  return (
    <AppStyled className="App">
      <h1>contact form</h1>
      <Form createContact={createContact} />
      <ContactList contacts={contacts} deleteContact={deleteContact} />
    </AppStyled>
  );
}

export default App;
