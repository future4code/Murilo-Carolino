import React from 'react';
import styled, { ThemeConsumer } from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const FormularioPostar = styled.div `
  margin: 10px;
  background-color: #c7c7c7;
  padding: 5px;
  
  input {
    margin: 2px;
    border: inset;
    background-color: #f6f6f6;
}
  input:active {
    color: salmon;
    background-color: black;
  }
`

class App extends React.Component {

  state = {
    post: [
      {
        nomeUsuario: 'Paulinha',
        fotoUsuario: 'https://picsum.photos/50/50?random=1',
        fotoPost: 'https://picsum.photos/200/150?random=1'
      },
      {
        nomeUsuario: 'Lucas',
        fotoUsuario: 'https://picsum.photos/50/50?random=2',
        fotoPost: 'https://picsum.photos/200/150?random=2'
      },
      {
        nomeUsuario: 'Sarah',
        fotoUsuario: 'https://picsum.photos/50/50?random=3',
        fotoPost: 'https://picsum.photos/200/150?random=3'
      }
    ],
    valorInputUsuário: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: ""

  }

  adicionarPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputUsuário,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    }

    const atualizaPosts = [novoPost, ...this.state.post]
    this.setState({
      post: atualizaPosts
    })
  }

  onChangeInputUsuario = (event) => {
    this.setState({
      valorInputUsuário: event.target.value
    })
  }

  onChangeInputFotoUsuario = (event) => {
    this.setState({
      valorInputFotoUsuario: event.target.value
    })
  }

  onChangeInputFotoPost = (event) => {
    this.setState({
      valorInputFotoPost: event.target.value
    })
  }

  render() {

    const componentesPost = this.state.post.map((item) => {
      return (
      <Post 
        {...item} 
      />
      )
    })

    const containerPostar = [
      <FormularioPostar>
        <input 
          placeholder="Usuário"
          value={this.state.valorInputUsuário}
          onChange={this.onChangeInputUsuario}
        />
        <input 
          placeholder="Link da foto do usuário"
          value={this.state.valorInputFotoUsuario}
          onChange={this.onChangeInputFotoUsuario}
        />
        <input 
          placeholder="Link da foto do post"
          value={this.state.valorInputFotoPost}
          onChange={this.onChangeInputFotoPost}
        />
        <button onClick={this.adicionarPost}>Postar</button>
      </FormularioPostar>
    ]

    return (
      <MainContainer>
        {containerPostar}
        {componentesPost}
      </MainContainer>
    );
  }
}

export default App;
