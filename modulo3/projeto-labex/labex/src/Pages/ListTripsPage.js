import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios'

const ListTripsDisplay = styled.div`
    display: flex;
    flex-direction: column;
`

const LinkArea = styled.div`
    display: flex;
    flex-direction: row;
    margin-right: auto;
    margin-left: auto;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    border: 1px solid grey;
    border-radius: 15px;
    background-color: #4682B4;
    height: 10px;
    width: 80px;
    display: flex;
    margin: 10px;
    padding: 10px;
    align-items: center;
    justify-content: center;

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

const Trips = styled.div`
    border: 1px solid black;
    width: 300px;
    margin: 10px;
    padding: 5px;
    box-shadow: 0px 5px 8px #708090;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
`

function ListTrips(props){
    const [listaTrips, setListaTrips] = useState([])

    useEffect(()=>{
        getTrips()
    }, [])

    const getTrips = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/igor-matsuoka-carver/trips')
        .then((res)=>{
            setListaTrips(res.data.trips)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const mapTrips = listaTrips.map((item)=>{
        return <Trips key={item.id}>
            <p>Nome: {item.name}</p>
            <p>Descrição: {item.description}</p>
            <p>Planeta: {item.planet}</p>
            <p>Duração: {item.durationInDays}</p>
            <p>Data: {item.date}</p>
        </Trips>
    })

    return <ListTripsDisplay>
        <h1>LISTA DE VIAGENS</h1>
        <LinkArea>
        <StyledLink to="/">Voltar</StyledLink>
        <StyledLink to="/trips/application">Inscrever-se</StyledLink>
        </LinkArea>
        
        <div>
        {listaTrips.length > 0 ? (<div>{mapTrips}</div>)
        :
        (<h1>Carregando...</h1>)}
        </div>

    </ListTripsDisplay>
}

export default ListTrips;