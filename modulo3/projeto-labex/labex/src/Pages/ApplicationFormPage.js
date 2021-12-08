import React from 'react';
import { Link } from "react-router-dom";

function ApplicationForm(props) {

    return <div>
        <h1>INSCREVA-SE</h1>
        <input
        placeholder="escolha uma viagem"/>
        <input
        placeholder="nome"/>
        <input
        placeholder="idade"/>
        <input
        placeholder="texto"/>
        <input
        placeholder="profissao"/>
        <input
        placeholder="pais"/>
        <Link to="/trips/list">Voltar</Link>
        <button>Enviar</button>
    </div>

}

export default ApplicationForm;