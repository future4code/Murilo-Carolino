import React from "react";
import styled from "styled-components";
import axios from "axios";

const headers = {
    headers: {
        Authorization: "murilo-terenciani-maryam"
    }
}

class ListsPlaylists extends React.Component {
    state = {
        playlists: [],
        tracks: [],
        button: false,
        playlistId: ""
    }

    componentDidMount () {
        this.getAllPlaylists()
    }



    getAllPlaylists = () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'

        axios
        .get(url, headers)
        .then((res) => {
            this.setState({
                playlists: res.data.result.list
            })
        })
        .catch((err) => {
            alert('Alguma coisa não está nos conformes, tente novamente!')
        })
    }

    deletePlaylist = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`

        if (window.confirm(`Você tem certeza que deseja excluir a Playlist?`)) {
            axios
            .delete(url, headers)
            .then((res) => {
                alert(`A Playlist foi excluída.`)
                this.getAllPlaylists()
            })
            .catch((err) => {
                alert('Alguma coisa não está nos conformes, tente novamente!')
            })
        } else {
            alert(`A Playlist não foi excluída. `)
        }

    }

    getPlaylistTracks = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`

        axios
        .get(url, headers)
        .then((res) => {
            console.log(res)
            this.setState({
                tracks: res.data.result.tracks,
                playlistId: id,
                button: <button onClick={() => this.addTrackToPlaylist(this.state.playlistId)}>Adicione uma Track</button>
            })
        })
        .catch((err) => {
            alert(err)
        })
    }

    addTrackToPlaylist = () => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.playlistId}/tracks`
        const body = {
            name: prompt("Nome da música:"), 
            artist: prompt('Nome do artista:'),
            url: prompt("Link url do spotify: (acrescente a palavra 'embed' no meio do link como o exemplo: https://open.spotify.com/embed/track/6Paon2GSO2btqO6qmS6hSE)")
        }


        axios
        .post(url, body, headers)
        .then((res) => {
            this.getPlaylistTracks(this.state.playlistId)
        })
        .catch((err) => {
            console.log(err.response.data.message)
        })
    }

    render() {
        const List = this.state.playlists.map((playlist) => {
            return (
                <div key={playlist.id}>
                    <button onClick={() => this.getPlaylistTracks(playlist.id)}>{playlist.name}</button>
                    <button onClick={() => this.deletePlaylist(playlist.id)}>X</button>
                </div>
            )
        })

        const detalhesPlaylist = this.state.tracks.map((track) => {
            return (
                <div>
                    <p1>{track.name}</p1> <br></br>
                    <p1>{track.artist}</p1> <br></br>
                    <iframe src={track.url} width="40%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                    <hr></hr>
                </div>
            )
        })


        return (
            <div>
                <h1>Lista de Playlist</h1>
                {List}
                <h2>Detalhes</h2>
                <div>
                    {/* <h4>{this.state.playlistName}</h4> */}
                    {detalhesPlaylist}
                    {this.state.button}
                </div>
                
            </div>
        )
    }
}

export default ListsPlaylists