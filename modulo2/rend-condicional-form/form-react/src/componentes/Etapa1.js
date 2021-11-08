import React from 'react';
import styled from 'styled-components'

const FormEtapa1 = styled.div `
    display: flex;
    justify-content: center;
    width: 80vh;
    flex-direction: column;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    font-size: 10px;
`
const Input = styled.input `
    width: 30vh;
`

export class Etapa1 extends React.Component {
    state = {
        inputNome: "",
        inputIdade: "",
        inputEmail: "",
    }

    render() {
        return (
            <FormEtapa1>
              <h1>Etapa 1 - DADOS GERAIS</h1>
              <h2>1. Qual o seu nome?</h2>
              <Input value = {this.state.inputNome}/>
              <h2> Qual a sua idade?</h2>
              <Input value = {this.state.inputIdade}/>
              <h2>3. Qual o seu e-mail?</h2>
              <Input value = {this.state.inputEmail}/>
              <h2>4. Qual a sua escolaridade?</h2>
              <select>
              <option value = "Ensino Médio incompleto">Ensino Médio incompleto</option>
              <option value = "Ensino Médio completo">Ensino Médio completo</option>
              <option value = "Ensino Superior incompleto">Ensino Superior incompleto</option>
              <option value = "Ensino Superior completo">Ensino Superior completo</option>
              </select>
            </FormEtapa1>
        )
    }
}

export default Etapa1;