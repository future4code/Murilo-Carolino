import React from "react";
import styled from "styled-components";
import axios from "axios";

const headers = {
    headers: {
        Authorization: "murilo-terenciani-maryam"
    }
}

class AddPlaylist extends React.Component {
    state = {
        playlistName: ""
    }

    createPlaylist = () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
        const body = {
            name: this.state.playlistName 
        }

        axios
        .post(url, body, headers)
        .then((res) => {
            alert(`Sua Playlist: ${body.name} foi criada!`)
            this.setState({
                playlistName: ""
            })
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
    }

    handlePlaylistName = (event) => {
        this.setState({
            playlistName: event.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>LabeFy</h1>
                <div>
                    <h2>Crie sua Playlist</h2>
                    <label>
                        Nome da sua nova Playlist: 
                        <input value={this.state.playlistName} onChange={this.handlePlaylistName}></input>
                        <button onClick={this.createPlaylist}>Criar</button>
                    </label>
                </div>
                <button>Lista de Playlists</button>
            </div>
        )
    }
}

export default AddPlaylist