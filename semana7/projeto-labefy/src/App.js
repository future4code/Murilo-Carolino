import React from "react";
import styled from "styled-components";
import axios from "axios";
import AddPlaylist from "./components/AddPlaylist";
import ListsPlaylists from "./components/ListsPlaylists";
import GlobalStyle from "./GlobalStyles";


class App extends React.Component {
  state = {
    page: "AddPlaylist"
  }

  renderPage = () => {
    switch (this.state.page) {
      case "AddPlaylist":
        return <AddPlaylist nextPage={this.nextPage}></AddPlaylist>
      case "ListsPlaylists":
        return <ListsPlaylists backPage={this.backPage}></ListsPlaylists>
      default:
        return "Página não existe!"
    }
  }

  nextPage = () => {
    this.setState({
      page: "ListsPlaylists"
    })
  }

  backPage = () => {
    this.setState({
      page: "AddPlaylist"
    })
  }
  render() {
    return (
      <div>
      <GlobalStyle/>  
        {this.renderPage()}
      </div>
    )
  }
}

export default App;
