import React from 'react';
import styled from 'styled-components'

const SecaoCardGrande = styled.div`
    display: flex;
    border: 1px solid black;
    margin: 20px;
    padding: 0;
    width: 40%;
    height: 200px;
    align-items: center;
    text-align: start;
    margin-left: auto;
    margin-right: auto;
`
const FotoPerfil = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 100px;
    margin: 20px;
`
const PropsDiv = styled.div`
    display: flex;
    flex-direction: column;
`
const PropsNome = styled.h4`
    height: 0;
`
const PropsDescricao = styled.p`
    font-size: 15px;
`

function CardGrande(props) {
    return (
        <SecaoCardGrande>
            <FotoPerfil img src={ props.imagem } />
            <PropsDiv>
                <PropsNome>{ props.nome }</PropsNome>
                <PropsDescricao>{ props.descricao }</PropsDescricao>
            </PropsDiv>
        </SecaoCardGrande>
    )
}

export default CardGrande;