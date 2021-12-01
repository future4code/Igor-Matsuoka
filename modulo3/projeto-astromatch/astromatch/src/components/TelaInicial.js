import styled from "styled-components"
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const TelaContainer = styled.div`
    border: 1px solid black;
    height: 500px;
    width: 300px;
    margin-left: auto;
    margin-right: auto;
`

const TelaInicial = (props) => {

    const[perfil, setPerfil] = useState({})

    const getProfile = () => {
        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/igor/person`)
        .then((res) => {
            setPerfil(res.data.profile)
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    useEffect(()=>{
        getProfile()
    }, [])

    const escolheProfile = (pegaId) => {
        const body = {
            id: pegaId,
            choice: true
        }
        axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/igor/choose-person', body)
        .then((res) => {
            getProfile()
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const recusaPerfil = (pegaId) => {
        const body = {
            id: pegaId,
            choice: false
        }
        axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/igor/choose-person', body)
        .then((res) => {
            getProfile()
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    return <div>
       <p>TelaInicial</p>
       <button onClick={props.renderMatch}>Matches</button>
       {perfil ? (<TelaContainer>
       <img src={perfil.photo} alt={perfil.id} width="300" height="300"/>
       <p>{perfil.name}</p>
       <p>{perfil.age}</p>
       <p>{perfil.bio}</p>
       <button onClick={()=>recusaPerfil(perfil.id)}>não</button>
       <button onClick={()=>escolheProfile(perfil.id)}>sim</button>
       </TelaContainer>) : (<p>Carregando...</p>)}
    </div>
}

export default TelaInicial