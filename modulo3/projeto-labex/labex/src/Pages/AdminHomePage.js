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

function AdminHome(){

    useProtectedPage()

    const [listaTrips, setListaTrips] = useState([])
    const token = localStorage.getItem('token')
    const navigate = useNavigate()

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

    const delTrip = (id) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/igor-matsuoka-carver/trips/${id}`, {
            headers: {
                auth: token
            }
        })
        .then((res) => {
            alert("Viagem deletada")
        })
        .catch((err) => {
            console.log("erro",err.data)
        })
    }

    useEffect((id) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/igor-matsuoka-carver/trips/${id}`, {
              headers: {
                auth:token
            }
        })
        .then((res) => {
            console.log("ok",res.data)
        })
        .catch((err) => {
            console.log("erro",err.data)
        })
    
    })

    const cleanLocalStorage = () => {
        localStorage.clear()
        navigate("/login")
    }

    const mapTrips = listaTrips.map((item)=>{
        return <div key={item.id}>
            <p>{item.name}</p>
            <button onClick={() => delTrip(item.id)}>&#x1F5D1;</button>
        </div>
    })

    return <div>
        <h1>Painel Admin</h1>
        <Link to="/">Voltar</Link>
        <Link to="/admin/trips/create">Criar Viagem</Link>
        <Link to="/admin/trips/:id">Detail</Link>
        <button onClick={cleanLocalStorage}>Logout</button>
        <div>
            {mapTrips}
        </div>
        
    </div>

}

export default AdminHome;