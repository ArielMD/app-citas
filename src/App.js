import React from "react";
import Form from "./components/Form";
import styled from "styled-components";

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
  return (
    <AppStyled className="App">
      <h1>contact form</h1>
      <Form />
    </AppStyled>
  );
}

export default App;
