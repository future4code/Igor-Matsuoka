import React from 'react';
import styled from 'styled-components'

const FormEtapa3 = styled.div `
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

export class Etapa3 extends React.Component {
    state = {
        inputMotivo: ""
    }

    render() {
        return (
            <FormEtapa3>
              <h1>Etapa 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
              <h2>7. Porque você não concluiu um curso de graduação?</h2>
              <Input value = {this.state.inputMotivo}/>
              <h2>8. Você fez algum curso complementar?</h2>
              <select>
              <option value = "nenhum">Nenhum</option>
              <option value = "tecnico">Curso técnico</option>
              <option value = "inglês">Curso de inglês</option>
              <option value = "outro">Outro</option>
              </select>
            </FormEtapa3>
        )
    }
}

export default Etapa3;