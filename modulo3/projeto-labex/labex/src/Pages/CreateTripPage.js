import React from 'react';
import { Link } from "react-router-dom";

function CreateTrip(){
    return <div>
        <h1>Crie uma viagem</h1>
        <Link to="/admin/trips/list">Voltar</Link>
        <button>Criar</button>
    </div>

}

export default CreateTrip;