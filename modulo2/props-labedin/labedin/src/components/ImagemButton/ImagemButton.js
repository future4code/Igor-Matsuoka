import React from 'react';
import styled from 'styled-components'

const Button = styled.div`
    border: 1px solid black;
    border-radius: 100px;
    width: 15%;
    height: 80px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
`
const ImagemBotao = styled.img`
    height: 50%;
    width: 20%;
    margin-top: 10px;
`
const TextoBotao = styled.p`
    margin: 0;
`

function ImagemButton(props) {
    return (
        <Button>
            <ImagemBotao img src={ props.imagem }/>
            <TextoBotao>{ props.texto }</TextoBotao>
        </Button>

    )
}

export default ImagemButton;
