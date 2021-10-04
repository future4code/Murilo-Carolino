import logo from './logo.svg';
import './App.css';
import Cadastro from './components/Cadastro';
import Lista from './components/ListaDeUsuarios';
import React from 'react';
import DetalhesUsuario from './components/DetalhesUsuario';
import axios from 'axios';

class App extends React.Component {
  state = {
    page: "registration",
    details: []
  }

  renderPage = () => {
    switch (this.state.page) {
      case "registration":
        return <Cadastro nextPage={this.nextPage} />;
      case "listUsers":
        return <Lista  backPage={this.backPage} detailsPage={this.detailsPage} />;
      case "userDetails":
        return <DetalhesUsuario listUsers={this.nextPage} userDados={this.state.details}/>
      default:
        return <Cadastro></Cadastro>;
    }
  }

  nextPage = () => {

    this.setState({
      page: "listUsers",
    })
  }

  backPage = () => {
    this.setState({
      page: "registration",
    })
  }

  detailsPage = (user) => {
    this.setState({
      page: "userDetails",
    })

    const headers = {
      headers: {
          Authorization: "murilo-terenciani-maryam"
      }
    }

    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${user.id}`
    axios
    .get(url, headers)
    .then((res) => {
        this.setState({
            details: res.data
        })
    })
    .catch((err) => {
        alert(err.response.data.message)
    })
  }
  
  render () {
    return (
      <div>
        {this.renderPage()}
      </div>
    )
  }
}

export default App;
