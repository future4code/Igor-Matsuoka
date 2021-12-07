import React from 'react';
import { Link } from "react-router-dom";

function AdminHome(){
    return <div>
        <h1>Painel Admin</h1>
        <Link to="/">Voltar</Link>
        <Link to="/createtrip">Criar Viagem</Link>
        <Link to="/tripdetail">Detail</Link>
        <button>Logout</button>
    </div>

}

export default AdminHome;