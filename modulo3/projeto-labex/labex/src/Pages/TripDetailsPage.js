import {React, useEffect} from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

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

function TripDetails(){

    useProtectedPage()

    useEffect(() => { 
        const token = localStorage.getItem("token")
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/trip/3bUbdB1gvPzWrThpazVC", 
            {
                headers: {
                    auth: token
                }
            }
        )
        .then((response)=>{
            console.log(response.data)
        })
        .catch((error)=>{
            console.log(error.response)
        })
    }, [])

    return <div>
        <h1>Detalhes da Viagem</h1>
        <Link to="/admin/trips/list">Voltar</Link>
    </div>

}

export default TripDetails;