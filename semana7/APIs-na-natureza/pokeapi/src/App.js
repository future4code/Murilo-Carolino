import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import backgroundCard from './imgs/background-card.png'
import pokemonbanner from './imgs/pokemon.jpg'

const ContainerSite = styled.div `
  background-color: black;
  width: 100vw;
  height: 100vh;
  margin: auto;
  padding: auto;
  text-align: center;

  h1, h2 {
    color: whitesmoke;
    margin-top: 5px;
    margin-bottom: 5px;
  }

  h1 {
    margin-top: -25px;
  }
`

const Banner = styled.img `
  width: 500px;
  height: 260px;
`

const NameCapitalize = styled.h3 `
  text-transform: uppercase;
`

const ContainerPokemons = styled.div `
  border: 2px solid white;
  border-radius: 20px;
  display: flex;
  align-items: center;
  width: 400px;
  height: 200px;
  justify-content: space-around;
  margin: auto;
  margin-top: 20px;

  div:nth-child(1) {
    height: 200px;
    border-bottom-left-radius:20px ;
    border-top-left-radius: 20px;
    width: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  div:nth-child(2) {
    width: 150px;
    height: 200px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    text-align: center;
    display: flex;
    flex-direction: column;
    background-color: #3c75bc;
    border-left: 4px groove #f9e69b;
  }
`
const ImagensPokemon = styled.div `
  position: relative;
  width: max-content;
  background-image: url(${backgroundCard});
  background-size: cover;

  img {
    width: 120px;
    margin-top: 60px;
  }

  img:nth-child(2) {
    visibility: hidden;
    opacity: 0;
    position:absolute;
    top:auto;
    left:auto;
  }

  :hover img:nth-child(2){
    visibility: visible;
    opacity: 1;
  }

  :hover img:nth-child(1){
    visibility: hidden;
  }
`

class App extends React.Component {
  state = {
    pokemons: [],
    type1: "",
    type2: "",
    pictures: [],
    namePokemon: ""
  }

  componentDidMount () {
    this.getPokemons()
  }

  getPokemons = () => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`

    axios
    .get(url)
    .then((res) => {
      this.setState({
        pokemons: res.data.results
      })
    })
    .catch((err) => {
      console.log(err)
    })
  }

  getPokeInfos = (event) => {
    const url = event.target.value

    axios
    .get(url)
    .then((res) => {
      if (res.data.types.length === 2) {
        this.setState({
          type1: res.data.types[0].type.name,
          type2: res.data.types[1].type.name,
          pictures: [res.data.sprites.front_default, res.data.sprites.back_default],
          namePokemon: res.data.name
        })
      } else {
        this.setState({
          type1: res.data.types[0].type.name,
          type2: "",
          pictures: [res.data.sprites.front_default, res.data.sprites.back_default],
          namePokemon: res.data.name
        })
      }

    })
    .catch((err) => {
      console.log(err)
    })
  }

  render () {
    const listPokemon = this.state.pokemons.map((pokemon) => {
      return <option key={pokemon.name} value={pokemon.url}>{pokemon.name}</option>

    })

    const cardPokemon = 
    (
    <ContainerPokemons>
      <ImagensPokemon>
        <img src={this.state.pictures[0]} alt="Foto do pokemon"></img>
        <img src={this.state.pictures[1]} alt="Foto do pokemon"></img>
      </ImagensPokemon>
      <div>
        <NameCapitalize>{this.state.namePokemon}</NameCapitalize>
        <h4>Tipo:</h4>
        <p>{this.state.type1} / {this.state.type2}</p>
      </div>
    </ContainerPokemons>
      
    )

    return (
      <ContainerSite>
        <Banner src={pokemonbanner}></Banner>
        <h1>1ª Geração - Kanto</h1>
        <h2>Descubra o tipo de seus pokemons favoritos! </h2>
        <select onChange={this.getPokeInfos}>
          <option>Selecione um Pokemon:</option>
          {listPokemon}
        </select>
        {this.state.pictures[0] && (cardPokemon)}
      </ContainerSite>
    )
  }
}

export default App;
