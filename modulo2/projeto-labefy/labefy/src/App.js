import React from 'react';
import styled from 'styled-components';
import CreatePlaylist from './components/CreatePlaylist';
import ListaPlaylists from './components/ListaPlaylists';

const ButtonDisplay = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height: 10vh;
  align-content: center;
  justify-content: space-around;
  background-color: orange;
`
const ButtonRenderiza = styled.button`
  height: 50px;
  width: 160px;
`

export default class App extends React.Component {
  state={
    pagina: "Criar"
  }

  renderizaPagina = () => {
    switch(this.state.pagina){
      case "Criar":
        return <CreatePlaylist/>
      case "ListaPlaylists":
        return <ListaPlaylists/>
      default:
        return <p>Página não encontrada</p>
    }
  }

  paginaCriar = () => {
    return this.setState({pagina: "Criar"})
  }

  paginaLista = () => {
    return this.setState({pagina: "ListaPlaylists"})
  }

  render(){
    return (
      <div>
        <ButtonDisplay>
        <ButtonRenderiza onClick={this.paginaLista}>MINHAS PLAYLISTS</ButtonRenderiza>
        <ButtonRenderiza onClick={this.paginaCriar}>CRIE SUA PLAYLIST</ButtonRenderiza>
        </ButtonDisplay>
        <div>
        {this.renderizaPagina()}
        </div>
      </div>
    );
  }
}

