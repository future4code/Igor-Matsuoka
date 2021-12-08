import { React, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";

const useProtectedPage = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("token");
    
        if (token === null) {
          console.log("Não está logado!!!");
          navigate("/login");
        }
    }, []);
}

function AdminHome(){
    useProtectedPage()

    return <div>
        <h1>Painel Admin</h1>
        <Link to="/">Voltar</Link>
        <Link to="/admin/trips/create">Criar Viagem</Link>
        <Link to="/admin/trips/:id">Detail</Link>
        <button>Logout</button>
    </div>

}

export default AdminHome;