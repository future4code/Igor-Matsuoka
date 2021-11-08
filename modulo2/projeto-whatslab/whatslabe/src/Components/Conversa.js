import React from 'react'
import styled from 'styled-components'

const Inputs = styled.div `
display:flex;
flex-direction:row;
justify-content: space-between;
`
const InputUsuario = styled.input `
width: 10vw;
`
const InputMensagem = styled.input `
width: 50vw;
`
const ContainerConversa = styled.div `
display:flex;
flex-direction:row;
margin-left: 5px;
`
const Container = styled.div `
border: 1px solid black;
width:30vw;
height:100vh;
margin-left:auto;
margin-right: auto;
display: flex;
flex-direction: column;
justify-content: flex-end;
background-color: lightblue;
`

class Conversa extends React.Component{
  state = {
    conversa: [{
      usuario: "",
      mensagem: "",
      }
    ],
    inputNomeUsuario: "",
    inputMensagem: "",
  }

  adicionaConversa = () => {
    const novoUsuario = {
      usuario: this.state.inputNomeUsuario,
      separador: ": ",
      mensagem: this.state.inputMensagem
    }
    const copiaUsuarios = [...this.state.conversa, novoUsuario]
    this.setState({conversa: copiaUsuarios})
    this.setState({
      inputNomeUsuario: "",
      inputMensagem: ""
    })
  }
  
  
  onChangeInputNomeUsuario = (event) => {
    this.setState({inputNomeUsuario: event.target.value})
  }
  
  onChangeInputMensagem = (event) => {
    this.setState({inputMensagem: event.target.value})
  }

  render() {
    const conversaAdicionada = this.state.conversa.map ((user)=>{
      return (
        <ContainerConversa>
          <b>{user.usuario}</b>
          {user.separador}
          {user.mensagem}
        </ContainerConversa>
      )
    })

    return (
      <Container>
        <espacoMensagem>{conversaAdicionada}</espacoMensagem>

        <Inputs>
          <InputUsuario
            value={this.state.inputNomeUsuario}
            onChange={this.onChangeInputNomeUsuario}
            placeholder={"Usuário"}
          />
          <InputMensagem
            value={this.state.inputMensagem}
            onChange={this.onChangeInputMensagem}
            placeholder={"Mensagem"}
          />

          <button onClick={this.adicionaConversa}>Enviar</button>

        </Inputs>
      </Container>
    )
  }
}

export default Conversa