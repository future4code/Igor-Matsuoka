import { React, useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

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

function AdminHome(props){
    useProtectedPage()

    const [listaTrips, setListaTrips] = useState([])

    useEffect(()=>{
        getTrips()
    }, [])

    const getTrips = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/igor-matsuoka-carver/trips')
        .then((res)=>{
            setListaTrips(res.data.trips)
        })
        .catch((err)=> {
            console.log(err)
        })
    }

    const mapTrips = listaTrips.map((item)=>{
        return <div key={item.id}>
            <p>{item.name}</p>
            <button>delete</button>
        </div>
    })

    return <div>
        <h1>Painel Admin</h1>
        <Link to="/">Voltar</Link>
        <Link to="/admin/trips/create">Criar Viagem</Link>
        <Link to="/admin/trips/:id">Detail</Link>
        <button>Logout</button>
        <div>
            {mapTrips}
        </div>
        
    </div>

}

export default AdminHome;