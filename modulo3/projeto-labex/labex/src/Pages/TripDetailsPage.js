import { React, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
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

const DisplayDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const TripArea = styled.div`
    border: 1px solid black;
    width: 100%;
    box-shadow: 0px 5px 8px #708090;
    padding: 5px;
    border-radius: 10px;
    margin-left: auto;
    margin-right: auto;
`

const CandidateArea = styled.div`
    border: 1px solid black;
    width: 30%;
    box-shadow: 0px 5px 8px #708090;
    padding: 5px;
    border-radius: 10px;
    margin-left: auto;
    margin-right: auto;
`

const ButtonArea = styled.div`
    display: flex;
    justify-content: center;
`

const Button = styled.button`
    text-decoration: none;
    border: 1px solid black;
    border-radius: 15px;
    background-color: white;
    height: 32px;
    width: 102px;
    display: flex;
    margin: 10px;
    padding: 10px;
    align-items: center;
    justify-content: center;

    :hover {
        color: white;
        background-color: grey;
    }
`

const StyledLink = styled(Link)`
    text-decoration: none;
    border-radius: 15px;
    border: 1px solid black;
    background-color: white;
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

function TripDetails(){
    useProtectedPage()

    const [trip, setTrip] = useState([])
    const [candidates, setCandidates] = useState([])
    const [aprovados, setAprovados] = useState({})
    const param = useParams()

    const getDetail = () => { 
        const token = localStorage.getItem("token")
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/igor-matsuoka-carver/trip/${param.id}`, 
            {
                headers: {
                    auth: token
                }
            }
        )
        .then((response)=>{
            console.log("trip",response)
            setTrip(response.data.trip)
            setCandidates(response.data.trip.candidates)
        })
        .catch((error)=>{
            console.log(error.response)
        })
    }

    useEffect(()=>{
        getDetail()
    }, [])

    const decideCandidate = (idCandidate, aprovados) => {
        const token = localStorage.getItem("token")
        const body = {
            approve: aprovados
        }
        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/igor-matsuoka-carver/trips/${trip.id}/candidates/${idCandidate}/decide`, body, 
            {
                headers: {
                    auth: token
                }
            }
        )
        .then((response)=>{
            console.log("certo", response.data)
            if(aprovados === true){
                alert("Candidato aprovado!")
            } else {
                alert("Candidato Reprovado!")
            }
            getDetail()
        })
        .catch((error)=>{
            console.log("erro do put ",error)
        })   
    }

    const tripDetail = () =>{
    return <TripArea>
        <div>
            <p><b>Nome: </b>{trip.name}</p>
            <p><b>Descrição: </b>{trip.description}</p>
            <p><b>Data: </b>{trip.date}</p>
            <p><b>Planeta: </b>{trip.planet}</p>
            <p><b>Duração: </b>{trip.durationInDays}</p>
        </div>
    </TripArea> 
    }

    const detailCandidate = trip.candidates && trip.candidates.map((profile) => {
        return (
            <CandidateArea key ={profile.id}>
                <p><b>Nome: </b>{profile.name}</p>
                <p><b>Idade: </b>{profile.age}</p>
                <p><b>Pais: </b>{profile.country}</p>
                <p><b>Profissão: </b>{profile.profession}</p>
                <p><b>Texto de Candidatura: </b>{profile.applicationText}</p>
                <div>
                    <ButtonArea>
                    <Button onClick={ ()=>decideCandidate(profile.id, true) }> Aprovar </Button>
                    <Button onClick={ ()=>decideCandidate(profile.id, false) }> Reprovar </Button>
                    </ButtonArea>
                </div>
            </CandidateArea>
        )
    })

    const approvedList = trip.approved && trip.approved.map((candidate) => {
        return <li key={candidate.id}>{candidate.name}</li>
    })

    return <DisplayDetails>
        <h1>DETALHES DA VIAGEM</h1>

        <div>
            {tripDetail()}
        </div>

        <h2> CANDIDATOS PENDENTES </h2>
            {detailCandidate}

        <h2> CANDIDATOS APROVADOS </h2>
            {approvedList}

        <StyledLink to="/admin/trips/list">Voltar</StyledLink>
    </DisplayDetails>



}

export default TripDetails;