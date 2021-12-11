import { React, useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import styled from 'styled-components';

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

const AdminArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Navigation = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const TripList = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100vh;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 5px;
    margin-top: 5px;
`

const Item = styled.p`
    width: 300px;
    display: flex;
    justify-content: center;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    border: 1px solid grey;
    border-radius: 15px;
    background-color: white;
    height: 10px;
    display: flex;
    margin: 10px;
    padding: 10px;
    align-items: center;

    :visited {
        color: black;
    }
    :hover {
        color: white;
        background-color: grey;
    }
    :link{
        color: black;
    }
`

const Button = styled.button`
    text-decoration: none;
    border: 1px solid grey;
    border-radius: 15px;
    background-color: white;
    height: 32px;
    width: 60.81px;
    display: flex;
    margin: 10px;
    padding: 10px;
    align-items: center;

    :hover {
        color: white;
        background-color: grey;
    }
`

function AdminHome(){
    useProtectedPage()

    const [listaTrips, setListaTrips] = useState([])
    const token = localStorage.getItem('token')
    const [id, setId] = useState("")
    const navigate = useNavigate()

    useEffect(()=>{
        getTrips()
    }, [])

    const getTrips = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/igor-matsuoka-carver/trips')
        .then((res)=>{
            console.log(res.data)
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
            console.log(res.data)
            getTrips()
        })
        .catch((err) => {
            console.log("erro",err.data)
        })
    }

    const alteraId = () =>{
        setId()
    }

    useEffect((id) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/igor-matsuoka-carver/trips/${id}`, {
              headers: {
                auth:token
            }
        })
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err.data)
        })
    
    })

    const cleanLocalStorage = () => {
        localStorage.clear()
        navigate("/login")
    }

    const mapTrips = listaTrips.map((item)=>{
        return <TripList key={item.id}>
            <StyledLink to={`/admin/trips/${item.id}`} onClick={() => alteraId(item.id)}><Item>{item.name}</Item></StyledLink>
            <button onClick={() => delTrip(item.id)}>&#x1F5D1;</button>
        </TripList>
    })

    return <AdminArea>
        <h1>PAINEL ADMIN</h1>
        <Navigation>
        <StyledLink to="/">Voltar</StyledLink>
        <StyledLink to="/admin/trips/create">Criar Viagem</StyledLink>                 
        <Button onClick={cleanLocalStorage}>Logout</Button>
        </Navigation>
        <div>
            {mapTrips}
        </div>
        
    </AdminArea>

}

export default AdminHome;