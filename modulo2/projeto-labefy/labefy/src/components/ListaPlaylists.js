import React from 'react';
import axios from 'axios';
import styled from "styled-components";

const Body = styled.div`
    display: flex;
    height: 100vh;
    background-color: black;
`

const PlaylistDisplay = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80vw;
    height: 100vh;
    justify-content: flex-start;
    background-color: orange;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    margin-bottom: auto;
    margin-top: auto;
`

const Playlists = styled.h2`
    font-size: 50px;
`
const Playlist = styled.div`
    display: flex;
    font-size: 20px;
    border: 1px solid black;
    width: 400px;
    text-align: center;
    justify-content: space-between;
    align-items: stretch;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: flex-end;
    padding: 20px;
    margin: 10px;
    border-radius: 10px;
    background-color: white;
`
const NamePlaylist = styled.div`
    width: 200px;
    font-size: 20px;
    text-align: start;
`

const Instrução = styled.h3`
    font-size: 30px;
`

const AddMusica = styled.div`
    display: flex;
    border: 1px solid black;
    border-radius: 10px;
    width: 60vw;
    height: 25vh;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-evenly;
    align-items: center;
`

const InputAdd = styled.input`
    width: 200px;
    height: 10px;
`

const ButtonAdd = styled.button`
    width: 200px;
`

export default class ListaPlaylists extends React.Component {
    state = {
        playlists: [],
        playlist: [],
        nomeMusica:"",
        nomeArtista:"",
        url:"",
        idPlaylist: "",
        detalhes: false
    }

    componentDidMount() {
        this.getPlaylist()
    }

    handleMusica = (e) => {
        this.setState({nomeMusica: e.target.value})
    }

    handleArtista = (e) => {
        this.setState({nomeArtista: e.target.value})
    }

    handleUrl = (e) => {
        this.setState({url: e.target.value})
    }

    abreLista = () => {
        this.setState({ detalhes: true })
    }

    fecharLista = () => {
        this.setState({ detalhes: false })
    }

    getPlaylist = async() => {
        try {
            const res = await axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", {
                headers:{
                    Authorization: "Igor-Matsuoka-Carver"
                }
            })
            this.setState({playlists: res.data.result.list})
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

    getPlaylistTracks = async(playlistId) => {
        try {
            const res = await axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`, {
                headers:{
                    Authorization: "Igor-Matsuoka-Carver"
                }
            })
            this.setState({playlist: res.data.result.tracks, idPlaylist: playlistId})
            this.abreLista()
            console.log(this.state.playlist)
        } catch (err) {
            alert("Ocorreu um erro")
        }
    }

    addTrackToPlaylist = async(playlistId) => {
        const body = {
            name: this.state.nomeMusica,
            artist: this.state.nomeArtista,
            url: this.state.url
        }
        try {
            const res = await axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.idPlaylist}/tracks`, 
                body, {
                    headers: {
                    Authorization: "Igor-Matsuoka-Carver"
                    }
                })
            this.setState({nomeMusica: '', nomeArtista: '', url: ''})
            this.getPlaylistTracks(this.state.idPlaylist)
        } catch (err) {
            alert("Ocorreu um erro!")
            console.log(err.response.data)
        }
    }

    deleteTrack = async(trackId) => {
        try {
            const res = await axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.idPlaylist}/tracks/${trackId}`, {
                headers:{
                    Authorization: "Igor-Matsuoka-Carver"
                }
            })
            this.getPlaylistTracks(this.state.idPlaylist)
        } catch (err) {
            alert("Ocorreu um erro!")
        }
    }

    render() {

        const listaCriada = this.state.playlists.map((genero) => {
            return <div key={genero.id}>
                <Playlist>
                <NamePlaylist>{genero.name}</NamePlaylist>
                <button onClick={() => this.getPlaylistTracks(genero.id)}>ACESSAR</button>
                <button onClick={() => this.deletePlaylist(genero.id)}>DELETAR</button>
                </Playlist>
            </div>
        })

        const musicasPlaylist = this.state.playlist.map((item)=>{
            return <div key={item.id}>
                {item.name}
                {item.artist}
                <audio ref="audio_tag" src={item.url} controls/>
                <button onClick={() => this.deleteTrack(item.id)}>Deleta música</button>
            </div>
        })

        const acessaDetalhes = () => {
            switch (this.state.detalhes) {
                case true:
                    return <AddMusica>
                        <button onClick={this.fecharLista}>Fechar Playlist</button>
                        <h2>ADICIONE UMA MÚSICA A ESSA PLAYLIST</h2>
                        <InputAdd
                        placeholder={"Nome da Música"}
                        value={this.state.nomeMusica}
                        onChange={this.handleMusica}
                        />
                        <InputAdd
                        placeholder={"Nome do Artista"}
                        value={this.state.nomeArtista}
                        onChange={this.handleArtista}
                        />
                        <InputAdd
                        placeholder={"Url do aúdio"}
                        value={this.state.url}
                        onChange={this.handleUrl}
                        />
                        <ButtonAdd onClick={this.addTrackToPlaylist}>ADICIONAR MÚSICA</ButtonAdd>
                        {musicasPlaylist}
                    </AddMusica>
                case false:
                    return <Instrução>ACESSE UMA LISTA!</Instrução>
                default:
                    return <p>Erro!</p>
            }
        }

      return (
        <Body>
        <PlaylistDisplay>
          <Playlists>Minhas Playlists</Playlists>
            {listaCriada}
            {acessaDetalhes()}
        </PlaylistDisplay>
        </Body>
      );
    }
}