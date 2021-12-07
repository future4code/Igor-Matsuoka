import React from 'react';
import { Link } from "react-router-dom";

function ApplicationForm(){
    return <div>
        <h1>INSCREVA-SE</h1>
        <Link to="/trips">Voltar</Link>
        <button>Enviar</button>
    </div>

}

export default ApplicationForm;