import React from "react";
import Home from "./components/Home/Home";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
  }
`


function App() {
  return (
    <div>
      <GlobalStyle />
      <Home></Home>
    </div>
  );
}

export default App;
