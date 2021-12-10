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
    /* const [aprovados, setAprovados] = useState([])
    const [reprovados, setReprovados] = useState([]) */
    const param = useParams()
    console.log("useParam ", param.id)

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

    /* const decideCandidate = () => {
        const token = localStorage.getItem("token")
        const body = {
            approve: true
        }
        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/igor-matsuoka-carver/trips/${trip}/candidates/${candidates}/decide`, body, 
            {
                headers: {
                    auth: token
                }
            }
        )
        .then((response)=>{
            console.log(response)
            setAprovados()
        })
        .catch((error)=>{
            console.log(error)
        })   
    } */

    /* const decideYes = () =>{

    } */


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
                        <button variant="contained" type='submit' >Aprovar</button>
                        <button variant="contained" type='submit' >Reprovar</button>
                    </div>
                </div>
            </div>
        )
    })


    return <div>
        <h1>Detalhes da Viagem</h1>

        <div>
        {tripDetail()}
        </div>

        <h1>Candidatos</h1>
        {detailCandidate}

        <h2> Candidatos Aprovados </h2>
            {/* {approvedList} */}
        <h2> Candidatos Reprovados </h2>

        <Link to="/admin/trips/list">Voltar</Link>
    </div>



}

export default TripDetails;