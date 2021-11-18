import React from 'react'
import CreatePlaylist from './components/CreatePlaylist';
import ListaPlaylists from './components/ListaPlaylists';

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
        {this.renderizaPagina()}
        <button onClick={this.paginaLista}>Minhas Playlists</button>
        <button onClick={this.paginaCriar}>Crie sua Playlist</button>
      </div>
    );
  }
}

