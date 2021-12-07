import React from 'react';
import { Link } from "react-router-dom";

function AdminHome(){
    return <div>
        <h1>Painel Admin</h1>
        <Link to="/">Voltar</Link>
        <Link to="/admin/trips/create">Criar Viagem</Link>
        <Link to="/admin/trips/:id">Detail</Link>
        <button>Logout</button>
    </div>

}

export default AdminHome;