import React from "react";
import styled from "styled-components";

const ContactStyled = styled.div`
  background-color: #fccf31;
  border-radius: 10px;
  padding: 10px;
  p {
    margin: 5px;
  }
  button {
    border-radius: 10px;
    background: #f55555;
    color: white;
    &:hover {
      background: red;
    }
  }
`;
const Contact = ({ contact, deleteContact }) => {
  return (
    <ContactStyled>
      <p>
        <strong>Name:</strong> <span>{contact.name}</span>
      </p>
      <p>
        <strong>email:</strong>
        <span>{contact.email}</span>
      </p>
      <p>
        <strong>subject:</strong>
        <span>{contact.suject}</span>
      </p>
      <p>
        <strong>description:</strong>
        <span>{contact.description}</span>
      </p>

      <button onClick={() => deleteContact(contact.id)}>Eliminar</button>
    </ContactStyled>
  );
};

export default Contact;
