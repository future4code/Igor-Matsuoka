import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Matches = (props) => {

    const [matches, setMatches] = useState([])

    useEffect(()=>{
        pegaMatches()
    },[])

    const pegaMatches = () => {
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/igor/matches')
        .then((res)=>{
            setMatches(res.data.matches)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const mapMatches = matches.map((perfil)=>{
        return <div key={perfil.id}>
            <img src={perfil.photo} alt={perfil.name}/>
            <p>{perfil.name}</p>
        </div>
    })

    return <div>
        <p>Matches</p>
        <button onClick={props.renderTelaInicial}>Profiles</button>
        {matches ? (<div>
            {mapMatches}
        </div>) : (<p>Você ainda não possui matches =/</p>)}
    </div>
}

export default Matches