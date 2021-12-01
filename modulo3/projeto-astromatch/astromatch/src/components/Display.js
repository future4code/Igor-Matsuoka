import React, { useState } from 'react';
import TelaInicial from './TelaInicial';
import Matches from './Matches';


const Display = () => {
    const [tela, setTela] = useState(true)

    const renderizaMatches = () => {
        setTela(false)
    }

    const renderizaTelaInicial = () => {
        setTela(true)
    }
    
    const trocaTela = tela ? (<TelaInicial renderMatch={renderizaMatches}/>) : (<Matches renderTelaInicial={renderizaTelaInicial}/>)

    return <div>
        {trocaTela}
    </div>
}

export default Display