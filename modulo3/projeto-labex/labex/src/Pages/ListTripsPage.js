import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios'

const ListTripsDisplay = styled.div`
    display: flex;
    flex-direction: column;
`

const Titulo = styled.h1`
    margin-right: auto;
    margin-left: auto;
`

const LinkArea = styled.div`
    display: flex;
    flex-direction: row;
    margin-right: auto;
    margin-left: auto;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    border-radius: 15px;
    background-color: orange;
    height: 10px;
    width: 120px;
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
const TripsList = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

const Loading = styled.h1`
    margin-right: auto;
    margin-left: auto;
`

function ListTrips() {
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
            <p><b>Nome:</b> {item.name}</p>
            <p><b>Descrição:</b> {item.description}</p>
            <p><b>Planeta:</b> {item.planet}</p>
            <p><b>Duração:</b> {item.durationInDays} dias</p>
            <p><b>Data:</b> {item.date}</p>
        </Trips>
    })

    return <ListTripsDisplay>
        <Titulo>LISTA DE VIAGENS</Titulo>
        <LinkArea>
        <StyledLink to="/">VOLTAR</StyledLink>
        <StyledLink to="/trips/application">INSCREVER-SE</StyledLink>
        </LinkArea>
        
        <div>
        {listaTrips.length > 0 ? (<TripsList>{mapTrips}</TripsList>)
        :
        (<Loading>Carregando...</Loading>)}
        </div>

    </ListTripsDisplay>
}

export default ListTrips;