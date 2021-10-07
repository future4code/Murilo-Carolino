import React, { useState } from "react";
import Home from "./components/Home/Home";
import { createGlobalStyle } from "styled-components";
import Matches from "./components/MatchsPage/MatchesPage";
import axios from "axios";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
  }
`

const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/murilo-terenciani-maryam/clear'


function App() {
  const [page, setPage] = useState("home")

  const renderPage = () => {
    switch (page) {
      case "home":
        return <Home nextPage={nextPage}></Home>;
      case "matches":
        return <Matches backPage={backPage}></Matches>
      default:
        return <Home></Home>
    }
  }

  const nextPage = () => {
    setPage("matches")
  }

  const backPage = () => {
    setPage("home")
  }

  const clearApp = () => {
    const headers = {
      headers: 
          { 
              "Content-Type": "application/json" 
          }
    }

    axios
    .put(url, headers)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  return (
    <div>
      <GlobalStyle />
      {renderPage()}
      <button onClick={clearApp}>Limpar</button>
    </div>
  );
}

export default App;
