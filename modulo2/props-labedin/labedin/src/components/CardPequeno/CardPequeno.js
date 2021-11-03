import React from 'react';
import styled from 'styled-components'

const SecaoCardpequeno = styled.div`
    display: flex;
    border: 1px solid black;
    margin: 20px;
    padding: 0;
    width: 40%;
    height: 100px;
    align-items: center;
    text-align: start;
    margin-left: auto;
    margin-right: auto;
`
const Logo = styled.img`
    width: 80px;
    height: 70px;
    border-radius: 100px;
    margin: 20px;
`
const Propsinfo = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: bold;
    margin-right: 5px;
`
const PropsNome = styled.h4`
    height: 0;
`
const PropsTexto= styled.p`
    font-size: 15px;
`

function CardPequeno(props) {
    return (
        <SecaoCardpequeno>
            <Logo img src={ props.imagem }/>
            <Propsinfo>{props.informacao }</Propsinfo>
            <PropsTexto>{ props.texto }</PropsTexto>
        </SecaoCardpequeno>

    )
}

export default CardPequeno;