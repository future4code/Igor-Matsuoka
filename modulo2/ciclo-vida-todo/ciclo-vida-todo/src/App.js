import React from 'react'
import styled from 'styled-components'

const Titulo = styled.h1 `
  display: flex;
  justify-content: center;
`

const TarefaList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 10px;
  width: 200px;
`


const Tarefa = styled.li`
  display: flex;
  text-align: center;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`
const ButtonDel = styled.button`
    display: flex;
    text-align: center;
    text-decoration: none;
    justify-content: center;
    flex-direction: row;
    align-items: flex-end;
    margin: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [
        {
          id: Date.now(),
        texto: 'Texto da tarefa',
        completa: false
        },
        {
          id: Date.now(),
          texto: 'Texto da tarefa',
          completa: true
        }
        
      ],
      inputValue: '',
      filtro: ''
    }
  
  salvarTarefaLocalStorage = () => {
    localStorage.setItem("tarefa", JSON.stringify(this.state.tarefas))
  }

  buscarLocalStorage = () => {
    const tarefasString = localStorage.getItem("tarefa")
    const tarefasParse = JSON.parse(tarefasString)

    this.setState({tarefas: tarefasParse})
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.tarefas === this.state.tarefas) {
      this.salvarTarefaLocalStorage()
    }
  }

  componentDidMount() {
    this.buscarLocalStorage()
  }

  onChangeInput = (event) => {
    this.setState({inputValue: event.target.value});
  }

  criaTarefa = () => {
    const novaTarefa ={
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false 
    }
    const novaListaDeTarefas = [novaTarefa, ...this.state.tarefas]
    this.setState({tarefas: novaListaDeTarefas})
  }

  removeTarefa = (id) => {
    const copiaDaLista = [...this.state.tarefas]
    const tarefaDeletada = copiaDaLista.filter((tarefas)=>{
      return tarefas.id !== id
    })
    this.setState({tarefas: tarefaDeletada })
  }

  removeTodasAsTarefas = (tarefa) => {
  const listaRemovida = this.state.tarefas.filter((tarefa)=>{
    return tarefa === tarefa.texto === tarefa.id
  })
    this.setState({tarefas: listaRemovida})
  }

  selectTarefa = (id) => {
    const novaListaDeTarefas = this.state.tarefas.map((tarefa)=>{
      if(id === tarefa.id){
        const novaTarefa = {
          ...tarefa,
          completa: !tarefa.completa
        }
        return novaTarefa
      } else {
        return tarefa
      }
    })
    this.setState({tarefas: novaListaDeTarefas})
  }

  onChangeFilter = (event) => {
    this.setState({filtro: event.target.value});
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
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
        <Titulo>Lista de tarefas</Titulo>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
          <button onClick={this.removeTodasAsTarefas}>Remover todas as tarefas</button>
        </InputsContainer>
        <br/>

        <InputsContainer >
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
                onClick={(ButtonDel) => this.removeTarefa(tarefa.id)}
              >
                {tarefa.texto}
                <ButtonDel onclick={this.removeTarefa}>X</ButtonDel>
              </Tarefa>
              
            )
          })}
          
        </TarefaList>
      </div>
    )
  }
}


export default App;
