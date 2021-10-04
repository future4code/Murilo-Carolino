import React from "react";
import styled from "styled-components";
import axios from "axios";
import logo from '../imgs/logo.png'
import background from '../imgs/background.png'

const headers = {
    headers: {
        Authorization: "murilo-terenciani-maryam"
    }
}

const Header = styled.div `
    display: flex;
    background-color: #f8ebd9;
    align-items: center;
    justify-content: space-between;

    div {
        display: flex;
        align-items: center;
    }

    img {
        width: 110px;
    }

    button {
        margin-right: 20px;
        background: #7d3195;
        color: white;
        border-radius: 10px;
        width: 130px;
        height: 30px;
        border: 1px solid #f8ebd9;
    }

`
const ContainerSite = styled.div `
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-image: url(${background});
    background-size: cover;
    background-position: center;
    
`

const ContainerPlaylist = styled.div `
    height: 130px;
    padding-left: 20px;
    background-color: #f0b972;
    border-radius: 45px;
    box-shadow: 5px 5px 1px 2px #622f6d;
    margin: auto;
    width: 1000px;

    div {
        display: flex;
        margin-right: 5px;
    }
`
const CardPlaylists =styled.div `

    button {
        background: #7d3195;
        color: white;
        border-radius: 5px;
        font-size: medium;
        border: none;
        
    }

    button:hover {
        background-color: #fa4576;
    }

    button:nth-child(2) {
        color: red;
        background-color: transparent;
    }

`

const AddMusic = styled.div `
    background: #7d3195;
    color: white;
    border-radius: 10px;
    width: 130px;
    height: 30px;
    text-align: center;
    padding-top: 10px;
    margin-bottom: 10px;

    :hover {
        background-color: #fa4576;
    }
`

const Body = styled.div `
    margin: auto;
`
const CardTrack = styled.div `
    display: flex;
    flex-direction: column;
    width: 300px;
    align-items: center;
    justify-content: center;
    margin: 30px;
    border-radius: 20px;
    border: 2px solid #f8ebd9;
    height: 200px;

    p1 {
        font-weight: bolder;
        font-size: larger;
    }
`

const ContainerTracks = styled.div `
    display: flex;
`


const Footer = styled.div `
    background-color: #f8ebd9;
    height: 50px;
`

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
            this.setState({
                tracks: res.data.result.tracks,
                playlistId: id,
                button: <AddMusic onClick={() => this.addTrackToPlaylist(this.state.playlistId)}>Add Track</AddMusic>
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
                <CardPlaylists key={playlist.id}>
                        <button onClick={() => this.getPlaylistTracks(playlist.id)}>{playlist.name}</button>
                        <button onClick={() => this.deletePlaylist(playlist.id)}>x</button>
                </CardPlaylists>
            )
        })

        const detalhesPlaylist = this.state.tracks.map((track) => {
            return (
                <CardTrack>
                    <p1>{track.name}</p1> <br></br>
                    <p1>{track.artist}</p1> <br></br>
                    <iframe src={track.url} width="90%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                </CardTrack>
            )
        })


        return (
            <ContainerSite>
                <Header>
                    <div>
                        <img src={logo}/>
                        <h1>LabeFy</h1>
                    </div>
                    <button onClick={this.props.backPage}>Criar Playlist</button>
                </Header>
                <ContainerPlaylist>
                    <h1>Playlists</h1>
                    <div>
                        {List}
                    </div>
                </ContainerPlaylist>
                <div>
                    <ContainerTracks>
                        {detalhesPlaylist}
                    </ContainerTracks>
                    {this.state.button}
                </div>
                <Footer>
                    <p>© 2021 LabeFY - Todos os direitos reservados.</p>
                </Footer>
            </ContainerSite>
        )
    }
}

export default ListsPlaylists