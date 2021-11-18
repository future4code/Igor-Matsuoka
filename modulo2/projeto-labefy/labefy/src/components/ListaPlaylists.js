import React from 'react';
import axios from 'axios';

export default class ListaPlaylists extends React.Component {
    state = {
        playlists: []
    }

    componentDidMount() {
        this.getPlaylist()
    }

    getPlaylist = async() => {
        try {
            const res = await axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", {
                headers:{
                    Authorization: "Igor-Matsuoka-Carver"
                }
            })
            this.setState({playlists: res.data.result.list})
            console.log(res.data.result.list)
        } catch (err) {
            alert("Ocorreu um erro!")
        }
    }

    deletePlaylist = async(playlistId) => {
        try {
            const res = await axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`, {
                headers:{
                    Authorization: "Igor-Matsuoka-Carver"
                }
            })
            this.getPlaylist()
        } catch (err) {
            alert("Ocorreu um erro!")
        }
    }

    render() {

        console.log(this.state.playlists)

        const listasCriadas = this.state.playlists.map((genero) => {
            return <div key={genero.id}>
                {genero.name} 
                <button onClick={() => this.deletePlaylist(genero.id)}>x</button>
            </div>
        })

      return (
        <div>
          <h2>Minhas Playlists</h2>
            {listasCriadas}
        </div>
      );
    }
}