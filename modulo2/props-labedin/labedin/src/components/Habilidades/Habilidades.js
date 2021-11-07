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
const FotoPersonalizada = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 100px;
    margin: 20px;
`
const PropsDiv = styled.div`
    display: flex;
    flex-direction: column;
`

const PropsDescricao = styled.li`
    font-size: 20px;
    margin-left: 10px;
`

function CardGrande(props) {
    return (
        <SecaoCardGrande>
            <FotoPersonalizada img src={ props.imagem } />
            <PropsDiv>
                <PropsDescricao>{ props.descricao1 }</PropsDescricao>
                <PropsDescricao>{ props.descricao2 }</PropsDescricao>
                <PropsDescricao>{ props.descricao3 }</PropsDescricao>
                <PropsDescricao>{ props.descricao4 }</PropsDescricao>
                <PropsDescricao>{ props.descricao5 }</PropsDescricao>
            </PropsDiv>
        </SecaoCardGrande>
    )
}

export default CardGrande;