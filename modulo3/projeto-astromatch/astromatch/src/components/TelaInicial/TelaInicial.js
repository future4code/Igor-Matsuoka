import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {TelaContainer, TelaProfile, Header, Info, PersonalInfo, ButtonChoice} from './StyledTelaInicial';
import Button from '@material-ui/core/Button';

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
        <Button size="small" variant="contained" color="secondary" onClick={props.renderMatch}>Matches</Button>
        </Header>
        {perfil ? (<TelaContainer>
        <img src={perfil.photo} alt={perfil.id} width="300" height="320"/>
        <Info>
        <PersonalInfo>{perfil.name}</PersonalInfo>
        <PersonalInfo>{perfil.age}</PersonalInfo>
        <PersonalInfo>{perfil.bio}</PersonalInfo>
        </Info>
        </TelaContainer>) : (<p>Carregando...</p>)}
        <ButtonChoice>
        <Button size="small" variant="contained" color="error" onClick={()=>recusaPerfil(perfil.id)}>&#120;</Button>
        <Button size="small" variant="contained" color="success" onClick={()=>aceitaProfile(perfil.id)}>&#10084;</Button>
        </ButtonChoice>
    </TelaProfile>
}

export default TelaInicial