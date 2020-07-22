import React, { useState } from "react";
import styled from "styled-components";

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 20px 20px 20px;
  border-radius: 10px;
  background-color: #ea5455;
  div {
    width: 70%;
    display: flex;
    flex-direction: column;

    margin-top: 20px;
  }

  label {
    padding-bottom: 5px;
  }

  input {
    border: 1px solid black;
    padding: 4px 12px;
    &:focus {
      outline-color: #80bdff;
      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }
  }

  textarea {
    height: 100px;
    &:focus {
      outline-color: #80bdff;
      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }
  }

  button {
    width: 100px;
    height: 30px;
    align-self: flex-end;
    margin: 20px 0px;
    border-radius: 10px;
    &:hover {
      background: #fccf31;
    }
  }
`;

const Form = ({ createContact }) => {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    subject: "",
    description: "",
  });

  const [error, setError] = useState(false);

  const { name, email, description, subject } = contactData;

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      name.trim() === "" ||
      email.trim === "" ||
      description.trim === "" ||
      subject.trim() === ""
    ) {
      setError(true);
      return;
    }

    setError(false);

    contactData.id = Math.random().toString(36).substr(2, 9);

    createContact(contactData);

    setContactData({
      name: "",
      email: "",
      subject: "",
      description: "",
    });
  };

  const updateState = (e) => {
    setContactData({
      ...contactData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <FormStyled onSubmit={onSubmit}>
      {error ? <h1>All fields are required</h1> : <h1>FORM</h1>}
      <div>
        <label>Name</label>
        <input
          name="name"
          onChange={updateState}
          placeholder="Enter name"
          value={name}
        ></input>
      </div>

      <div>
        <label>Email</label>
        <input
          name="email"
          onChange={updateState}
          placeholder="Enter Email"
          value={email}
        ></input>
      </div>

      <div>
        <label>Subject</label>
        <input
          name="subject"
          onChange={updateState}
          placeholder="Enter Subject"
          value={subject}
        ></input>
      </div>

      <div>
        <label>Description</label>
        <textarea
          name="description"
          onChange={updateState}
          placeholder="Enter Description"
          value={description}
        ></textarea>
        <button>Send</button>
      </div>
    </FormStyled>
  );
};

export default Form;
