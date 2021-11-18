import React from 'react'
import ListaUsuarios from './components/ListaUsuarios.js'
import Formulario from './components/Formulario.js'

export default class App extends React.Component{
  state = {
    etapa: true,
  }

  renderizarEtapa = () => {
    switch(this.state.etapa){
      case true:
        return <Formulario/>
      case false:
        return <ListaUsuarios/>;
      default:
    }
  }

  trocarPagina = (etapa) => {
    if (this.state.etapa === true){
      return this.setState({etapa: false})
    } else if (this.state.etapa === false) {
      return this.setState({etapa: true})
    }
  }

  render(){
    return (
      <div className = "App">
        <button onClick={this.trocarPagina}>Trocar de tela</button>
        {this.renderizarEtapa()}
      </div>
    );
  }
}
