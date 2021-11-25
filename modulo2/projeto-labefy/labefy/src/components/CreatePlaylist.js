import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Body = styled.div`
    display: flex;
    height: 100vh;
    background-color: black;
`

const Criar = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60vw;
    height: 60vh;
    justify-content: center;
    background-color: orange;
    border-radius: 60px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    margin-bottom: auto;
    margin-top: auto;
`
const InputCriar = styled.input`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40vw;
    height: 5vh;
    justify-content: center;
    margin: 10px;
    font-size: 20px;
`
const ButtonCriar = styled.button`
  height: 50px;
  width: 180px;
  margin-top: 20px;
`

const Labefy = styled.h1`
    font-size: 60px;
`

const CreateTitulo = styled.h2`
    font-size: 50px;
`

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
        <Body>
        <Criar>
            <Labefy>LABEFY</Labefy>
          <CreateTitulo>CRIE SUA PLAYLIST!</CreateTitulo>
        <InputCriar
          placeholder={"Nome da Playlist"}
          value={this.state.playlist}
          onChange={this.onChangeInputPlaylist}
        />
        <ButtonCriar onClick={this.createPlaylist}>CRIAR PLAYLIST</ButtonCriar>
        </Criar>
        </Body>
      );
    }    
}