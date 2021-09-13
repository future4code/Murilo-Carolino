import logo from './logo.svg';
import './App.css';
import React from 'react';
import styled from 'styled-components';
import Etapa1 from './components/Etapa1/Etapa1';
import Etapa2 from './components/Etapa2/Etapa2';
import Etapa3 from './components/Etapa3/Etapa3';
import Final from './components/Final/Final';

const ContainerPrincipal = styled.div `
  margin: 0;
  padding: 0;
  text-align: center;

  button {
    margin-top: 20px;
  }
`

class App extends React.Component {
  state = {
    etapa: 1
  }
  
  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />;
      case 2:
        return <Etapa2 />;
      case 3:
        return <Etapa3 />;
      case 4:
        return <Final />;
      default:
        return <h3>Seção inexistente</h3>;
    }
  }

  irParaProximaEtapa = () => {
    this.setState ({
      etapa: this.state.etapa + 1
    })
  }

  render () {
    return (
    <ContainerPrincipal> 
      {this.renderizaEtapa()}
      {this.state.etapa >= 4 ? <p>Criado por: Murilo Terenciani.</p> : <button onClick={this.irParaProximaEtapa}>Próxima etapa</button>}
    </ContainerPrincipal>
    )
  }
}

export default App;
