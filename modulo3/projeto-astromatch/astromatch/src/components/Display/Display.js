import React, { useState } from 'react';
import TelaInicial from '../TelaInicial/TelaInicial';
import Matches from '../Matches/Matches';
import axios from 'axios';
import {DisplayContainer, ButtonReset} from './StyledDisplay'

function Display() {

    const [tela, setTela] = useState(true)

    const renderizaMatches = () => {
        setTela(false)
    }

    const renderizaTelaInicial = () => {
        setTela(true)
    }

    const limpaMatches = () => {
        axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/igor/clear')
        .then((res)=>{
            alert("Você resetou o app!")
            setTela(true)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    
    const trocaTela = tela ? (<TelaInicial renderMatch={renderizaMatches}/>) : (<Matches renderTelaInicial={renderizaTelaInicial}/>)

    return <DisplayContainer>
        {trocaTela}
        <ButtonReset>
        <button onClick={()=>limpaMatches()}>Limpar Matches</button>
        </ButtonReset>
    </DisplayContainer>
}

export default Display