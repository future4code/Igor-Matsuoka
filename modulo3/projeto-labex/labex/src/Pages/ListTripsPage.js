import React from 'react';
import { Link } from "react-router-dom";

function ListTrips(){
    return <div>
        <h1>Lista de Viagens</h1>
        <Link to="/">Voltar</Link>
        <Link to="/trips/application">Inscrever-se</Link>
    </div>
}

export default ListTrips;