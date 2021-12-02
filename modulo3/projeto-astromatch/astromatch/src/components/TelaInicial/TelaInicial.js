import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {TelaContainer, TelaProfile, Header, Info, PersonalInfo, Button} from './StyledTelaInicial'

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

    const aceitaProfile = (pegaId) => {
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

    return <TelaProfile>
        <Header>
        <h3>ASTROMATCH</h3>
        <button onClick={props.renderMatch}>Matches</button>
        </Header>
        {perfil ? (<TelaContainer>
        <img src={perfil.photo} alt={perfil.id} width="300" height="320"/>
        <Info>
        <PersonalInfo>{perfil.name}</PersonalInfo>
        <PersonalInfo>{perfil.age}</PersonalInfo>
        <PersonalInfo>{perfil.bio}</PersonalInfo>
        </Info>
        </TelaContainer>) : (<p>Carregando...</p>)}
        <Button>
        <button onClick={()=>recusaPerfil(perfil.id)}>não</button>
        <button onClick={()=>aceitaProfile(perfil.id)}>sim</button>
        </Button>
    </TelaProfile>
}

export default TelaInicial