import React from "react";
import styled from "styled-components";

const ContactStyled = styled.div``;
const Contact = ({ contact, deleteContact }) => {
  return (
    <ContactStyled>
      <p>
        Name: <span>{contact.name}</span>
      </p>
      <p>
        email: <span>{contact.email}</span>
      </p>
      <p>
        subject: <span>{contact.suject}</span>
      </p>
      <p>
        description: <span>{contact.description}</span>
      </p>

      <button onClick={() => deleteContact(contact.id)}>Eliminar</button>
    </ContactStyled>
  );
};

export default Contact;
