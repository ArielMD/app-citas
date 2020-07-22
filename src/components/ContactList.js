import React from "react";
import styled from "styled-components";
import Contact from "./Contact";

const ContactListStyled = styled.div`
  div {
    margin: 20px;
  }
`;
const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ContactListStyled>
      {contacts.length > 0 ? <h1>Contact List</h1> : <h1>empty</h1>}
      <div>
        {contacts.map((contact) => {
          return (
            <Contact
              key={contact.id}
              contact={contact}
              deleteContact={deleteContact}
            />
          );
        })}
      </div>
    </ContactListStyled>
  );
};

export default ContactList;
