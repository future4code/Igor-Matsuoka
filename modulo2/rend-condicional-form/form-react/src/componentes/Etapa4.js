import React from 'react';
import styled from 'styled-components'

const FormEtapa4 = styled.div `
    display: flex;
    justify-content: center;
    width: 80vh;
    flex-direction: column;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    font-size: 10px;
`
const Descricao = styled.h2`
    font-weight: normal;
`

const PerguntaFechada = styled.h2`
    font-size: 10px;
`
class Etapa4 extends React.Component {
    render() {
        return (
            <FormEtapa4>
              <h1>Fim do Formulário!</h1>
              <Descricao>Obrigado por participar! Seus dados serão armazenados e entraremos em contato!</Descricao>
            </FormEtapa4>
        )
    }
}

export default Etapa4;