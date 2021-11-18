import React from 'react';
import axios from 'axios';

export default class CreatePlaylist extends React.Component {
    state = {
        playlist: ""
    }

    onChangeInputPlaylist = (e) => {
        this.setState({playlist: e.target.value})
    }

    createPlaylist = async() => {
        const body = {
            name: this.state.playlist
        }
        try {
            const res = await axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", 
                body, {
                    headers: {
                    Authorization: "Igor-Matsuoka-Carver"
                    }
                })
            this.setState({playlist: res.data})
        } catch (err) {
            alert("Ocorreu um erro!")
        }
    }

    render(){
      return (
        <div>
          <h2>Crie sua Playlist</h2>
        <input
          placeholder={"Nome da Playlist"}
          value={this.state.playlist}
          onChange={this.onChangeInputPlaylist}
        />
        <button onClick={this.createPlaylist}>Criar Playlist</button>
        </div>
      );
    }    
}