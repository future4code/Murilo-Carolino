import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: 
      [{
        id: 1,
        texto: 'Estudar React',
        completa: false
      },
      {
        id: Date.now(), 
        texto: 'Fazer o exercício diário',
        completa: true 
      }
      ],
      inputValue: '',
      filtro: ''
    }

  componentDidUpdate() {
    window.localStorage.setItem("Tarefa", JSON.stringify(this.state.tarefas));
  };

  componentDidMount() {
    const textoTarefaString = window.localStorage.getItem("Tarefa");
    // se existir, então converta e atualize o estado com ele
    if (textoTarefaString) {
      const tarefa = JSON.parse(textoTarefaString);
      this.setState({ tarefas: tarefa });
    }
  };

  onChangeInput = (event) => {
    this.setState({
      inputValue: event.target.value
    })
  }

  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(), // aqui, pode deixar o valor Date.now() para todas as tarefas as serem criadas
      texto: this.state.inputValue,// aqui, o texto da tarefa virá do input controlado guardado no estado
      completa: false // aqui, pode deixar o valor false para todas as tarefas as serem criadas, pq a tarefa sempre vai começar como não completa.
    }

    const copiaDoStateTarefas = [...this.state.tarefas, novaTarefa]


    this.setState ({
      tarefas: copiaDoStateTarefas
    })
    const textoTarefaString = JSON.stringify(copiaDoStateTarefas)
    window.localStorage.setItem("Tarefa", textoTarefaString)
    

  }

  selectTarefa = (id) => {

    const alteraTarefa = this.state.tarefas.map((tarefa) => {
      if (tarefa.id === id) {
        const mudaEstado = {...tarefa, completa: !tarefa.completa}
        return mudaEstado
      } else {
        return tarefa
      }
    })
    this.setState({
      tarefas: alteraTarefa
    })
  }

  onChangeFilter = (event) => {
    this.setState({
      filtro: event.target.value
    })
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter((tarefa) => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
