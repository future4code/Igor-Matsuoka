import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const InputInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class PostArray extends React.Component{
  state = {
    inputNomeUsuario: "",
    inputFotoUsuario: "",
    inputFotoPost: "",
    pessoas: [
      {
        nomeUsuario: "paulinha",
        fotoUsuario: "https://picsum.photos/20/50",
        fotoPost: "https://picsum.photos/200/150"
      },
      {
        nomeUsuario: "Joãozinho",
        fotoUsuario: "https://picsum.photos/70/50",
        fotoPost: "https://picsum.photos/220/150"
      },
      {
        nomeUsuario: "Marquin",
        fotoUsuario: "https://picsum.photos/60/50",
        fotoPost: "https://picsum.photos/210/150"
      }
    ]
  }

  guardaNomeUsuario = (event) => {
    this.setState({ inputNomeUsuario: event.target.value });
  };

  guardaFotoUsuario = (event) => {
    this.setState({ inputFotoUsuario: event.target.value });
  };

  guardaFotoPost = (event) => {
    this.setState({ inputFotoPost: event.target.value });
  };

  adicionaPost = () => {
    const novoPost = {
      nomeUsuario: this.state.inputNomeUsuario,
      fotoUsuario: this.state.inputFotoUsuario,
      fotoPost: this.state.inputFotoPost
    };

    const copia = [...this.state.pessoas, novoPost];

    this.setState({pessoas: copia})
    this.setState({inputNomeUsuario: "", inputFotoUsuario: "", inputFotoPost: "",})
  }

    render() {
    const listaDePosts = this.state.pessoas.map((pessoa)=>{
      return(
        <MainContainer>
          <Post
          nomeUsuario = {pessoa.nomeUsuario}
          fotoUsuario = {pessoa.fotoUsuario}
          fotoPost = {pessoa.fotoPost}
          />
        </MainContainer>
      )
    })
  
      return(
        <InputInfo>
          <h2>Poste uma foto!</h2>
          <input
            value={this.state.inputNomeUsuario}
            onChange={this.guardaNomeUsuario}
            placeholder="Nome do usuário"
            />
          <input
            value={this.state.inputFotoUsuario}
            onChange={this.guardaFotoUsuario}
            placeholder="URL da foto de perfil"
            />
          <input
            value={this.state.inputFotoPost}
            onChange={this.guardaFotoPost}
            placeholder="URL do post"
            />
            <button onClick={this.adicionaPost}>Adicionar</button>
          {listaDePosts}
        </InputInfo>
      )
  }
  

}

export default PostArray;