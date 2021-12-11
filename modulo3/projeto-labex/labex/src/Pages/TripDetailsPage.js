import { React, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
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

function TripDetails(){
    useProtectedPage()

    const [trip, setTrip] = useState([])
    const [candidates, setCandidates] = useState([])
    const [aprovados, setAprovados] = useState({})
    const param = useParams()
    console.log("trip", trip)

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

    const decideCandidate = (idCandidate) => {
        const token = localStorage.getItem("token")
        const body = {
            approve: aprovados
        }
        console.log("aprovados", aprovados)
        console.log("id do candidato", idCandidate)
        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/igor-matsuoka-carver/trips/${trip.id}/candidates/${idCandidate}/decide`, body, 
            {
                headers: {
                    auth: token
                }
            }
        )
        .then((response)=>{
            console.log("certo", response.data)
            getDetail()
        })
        .catch((error)=>{
            console.log("erro do put ",error)
        })   
    }

    const decideYes = (idCandidate) =>{
        setAprovados(true)
        decideCandidate(idCandidate)
    }

    const decideNo = (idCandidate) =>{
        setAprovados(false)
        decideCandidate(idCandidate)
    }


    const tripDetail = () =>{
    return <div>
        <div>
            <p><b>Nome: </b>{trip.name}</p>
            <p><b>Descrição: </b>{trip.description}</p>
            <p><b>Data: </b>{trip.date}</p>
            <p><b>Planeta: </b>{trip.planet}</p>
            <p><b>Duração: </b>{trip.durationInDays}</p>
        </div>
    </div> 
    }

    const detailCandidate = candidates.map((profile) => {
        return (
            <div key ={profile.id}>
                <p><b>Nome: </b>{profile.name}</p>
                <p><b>Idade: </b>{profile.age}</p>
                <p><b>Pais: </b>{profile.country}</p>
                <p><b>Profissão: </b>{profile.profession}</p>
                <p><b>Texto de Candidatura: </b>{profile.applicationText}</p>
                <div>
                    <div>
                        <button onClick={()=>decideYes(profile.id)}> Aprovar </button>
                        <button onClick={()=>decideNo(profile.id)}> Reprovar </button>
                    </div>
                </div>
            </div>
        )
    })

    const approvedList = trip.approved && trip.approved.map((approved) => {
        return <li>{approved.name}</li>
    })

    return <div>
        <h1>Detalhes da Viagem</h1>

        <div>
            {tripDetail()}
        </div>

        <h1>Candidatos Pendentes</h1>
            {detailCandidate}

        <h2> Candidatos Aprovados </h2>
            {approvedList}

        <Link to="/admin/trips/list">Voltar</Link>
    </div>



}

export default TripDetails;