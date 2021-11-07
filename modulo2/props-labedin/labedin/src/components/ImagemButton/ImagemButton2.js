import React from 'react';
import styled from 'styled-components'

const Button2 = styled.div`
    border: 1px solid black;
    border-radius: 100px;
    width: 15%;
    height: 80px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`
const ImagemBotao2 = styled.img`
    height: 60%;
    width: 20%;
    align-items: center;
`
const TextoBotao2 = styled.p`
    margin: 10px;
`

function ImagemButton2(props) {
    return (
        <Button2>
            <ImagemBotao2 img src={ props.imagem }/>
            <TextoBotao2>{ props.texto }</TextoBotao2>
        </Button2>

    )
}

export default ImagemButton2;