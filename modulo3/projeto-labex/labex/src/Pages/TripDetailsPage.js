import React from 'react';
import { Link } from "react-router-dom";

function TripDetails(){
    return <div>
        <h1>Detalhes da Viagem</h1>
        <Link to="/admin/trips/list">Voltar</Link>
    </div>

}

export default TripDetails;