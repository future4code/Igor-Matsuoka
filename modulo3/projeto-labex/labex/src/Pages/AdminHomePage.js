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
            alert(res.data)
        })
        .catch((err) => {
            console.log("erro",err.data)
        })
    }

    /* const getDetail = (id) => { 
        const token = localStorage.getItem("token")
        console.log("id que foi pego", id)
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/igor-matsuoka-carver/trip/${id}`, 
            {
                headers: {
                    auth: token
                }
            }
        )
        .then((response)=>{
            console.log(response.data.trip)
        })
        .catch((error)=>{
            console.log(error.response)
        })
    } */


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

    const mapTrips = listaTrips.map((item, id)=>{
        return <div key={item.id}>
            <Link to='/admin/trips/${id}' /* onClick={() => getDetail(item.id)} */><p>{item.name}</p></Link>
            <button onClick={() => delTrip(item.id)}>&#x1F5D1;</button>
        </div>
    })

    return <div>
        <h1>Painel Admin</h1>
        <Link to="/">Voltar</Link>
        <Link to="/admin/trips/create">Criar Viagem</Link>                 
        <button onClick={cleanLocalStorage}>Logout</button>
        <div>
            {mapTrips}
        </div>
        
    </div>

}

export default AdminHome;