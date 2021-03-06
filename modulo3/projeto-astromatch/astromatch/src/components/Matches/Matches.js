import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {TelaMatches, Header, ListaMatches, ImagemMatch, MatchesAtivos, Aviso} from './StyledMatches';
import Button from '@material-ui/core/Button';

const Matches = (props) => {

    const [listaMatches, setListaMatches] = useState([])

    useEffect(()=>{
        getMatches()
    },[])

    const getMatches = () => {
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/igor/matches')
        .then((res)=>{
            setListaMatches(res.data.matches)
        })
        .catch((err)=>{
            console.log(err)
        })
    } 

    const mapMatches = listaMatches.map((perfil)=>{
        return <MatchesAtivos key={perfil.id}>
            <ImagemMatch src={perfil.photo} alt={perfil.name}/>
            <p>{perfil.name}</p>
        </MatchesAtivos>
    })

    return <TelaMatches>
        <Header>
        <h3>ASTROMATCH</h3>
        <Button size="small" variant="contained" color="success" onClick={props.renderTelaInicial}>Profiles &#128269;</Button>
        </Header>
        <ListaMatches>
        {listaMatches.length > 0 ? (<div>
            {mapMatches}
        </div>) : (<Aviso>Você ainda não possui matches!</Aviso>)}
        </ListaMatches>
    </TelaMatches>
}

export default Matches