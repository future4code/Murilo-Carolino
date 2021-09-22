import logo from './logo.svg';
import './App.css';
import Cadastro from './components/Cadastro';
import Lista from './components/ListaDeUsuarios';
import React from 'react';

class App extends React.Component {
  state = {
    page: 1,
    buttonText: "Ir para a lista de Usuários",
  }

  renderPage = () => {
    switch (this.state.page) {
      case 1:
        return <Cadastro />;
      case 2:
        return <Lista />;
      default:
        return <Cadastro></Cadastro>;
    }
  }

  nextPage = () => {

    this.setState({
      page: (this.state.page + 1),
      buttonText: "Ir para a página de Cadastro",
    })
  }

  backPage = () => {
    this.setState({
      page: this.state.page - 1,
      buttonText: "Ir para a lista de Usuários"
    })
  }

  render () {
    return (
      <div>
        {this.renderPage()}
        {this.state.page > 1 ? <button onClick={this.backPage}>{this.state.buttonText}</button> : <button onClick={this.nextPage}>{this.state.buttonText}</button>}
      </div>
    )
  }
}

export default App;
