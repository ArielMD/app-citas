import React from "react";
import styled from "styled-components";
import Contact from "./Contact";

const ContactListStyled = styled.div``;
const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ContactListStyled>
      {contacts.length > 0 ? <h1>Contact List</h1> : <h1>empty</h1>}
      {contacts.map((contact) => {
        return (
          <Contact
            key={contact.id}
            contact={contact}
            deleteContact={deleteContact}
          />
        );
      })}
    </ContactListStyled>
  );
};

export default ContactList;
