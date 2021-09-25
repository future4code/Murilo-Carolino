import React from "react";
import styled from "styled-components";
import axios from "axios";
import AddPlaylist from "./components/AddPlaylist";
import ListsPlaylists from "./components/ListsPlaylists";

function App() {
  return (
    <div>
      <AddPlaylist></AddPlaylist>
      <ListsPlaylists></ListsPlaylists>
    </div>
  );
}

export default App;
