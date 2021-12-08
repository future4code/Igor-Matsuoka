import {React, useEffect } from 'react';
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

function CreateTrip(){

    useProtectedPage()


    return <div>
        <h1>Crie uma viagem</h1>
        <Link to="/admin/trips/list">Voltar</Link>
        <button>Criar</button>
    </div>

}

export default CreateTrip;