import React from 'react';
import styled from 'styled-components'

const FormEtapa2 = styled.div `
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

export class Etapa2 extends React.Component {
    state = {
        inputCurso: "",
        inputUnidade: ""
    }

    render() {
        return (
            <FormEtapa2>
              <h1>Etapa 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
              <h2>5. Qual o curso?</h2>
              <Input value = {this.state.inputCurso}/>
              <h2>6. Qual a unidade de ensino?</h2>
              <Input value = {this.state.inputUnidade}/>
            </FormEtapa2>
        )
    }
}

export default Etapa2;