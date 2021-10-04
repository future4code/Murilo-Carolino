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

const ContainerSite = styled.div `
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-image: url(${background});
    background-size: cover;
    background-position: center;
`

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

    button:hover {
        background-color: #fa4576;
    }
`

const Footer = styled.div `
    background-color: #f8ebd9;
    height: 50px;

`

const ContainerAdd = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    height: 200px;
    justify-content: center;
    text-align: center;
    margin: auto;
    margin-top: 150px;
    background-color: #f0b972;
    border-radius: 45px;
    box-shadow: 5px 5px 1px 2px #622f6d;

    h2 {
        color: black;
    }

    label {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    button {
        margin-top: 10px;
        border: 1px solid white;
        border-radius: 8px;
        height: 30px;
        width: 60px;
        font-weight: bold;
        padding-top: 2px;
        background: #7d3195;
        color: white;
    }

    button:hover {
        background-color: #fa4576;
    }

`

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
            <ContainerSite>
                <Header>
                    <div>
                        <img src={logo}/>
                        <h1>LabeFy</h1>
                    </div>
                    <button onClick={this.props.nextPage}>Lista de Playlists</button>
                </Header>
                <ContainerAdd>
                    <h2>Crie sua Playlist</h2>
                    <label>
                        Nome da sua Playlist: 
                        <input value={this.state.playlistName} onChange={this.handlePlaylistName}></input>
                        <button onClick={this.createPlaylist}>Criar</button>
                    </label>
                </ContainerAdd>
                <Footer>
                    <p>© 2021 LabeFY - Todos os direitos reservados.</p>
                </Footer>
            </ContainerSite>
        )
    }
}

export default AddPlaylist