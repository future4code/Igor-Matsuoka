import React, { useState } from 'react'
import Display from './components/Display';
import axios from 'axios'

const App = () => {

  const limpaMatches = () => {
    axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/igor/clear')
    .then((res)=>{
        alert("Você resetou o app!")
    })
    .catch((err)=>{
        console.log(err)
    })
  }

  return(
    <div>
      <p>AstroMatch</p>
      <Display/>
      <div>
        <button onClick={limpaMatches}>Limpar Matches</button>
      </div>
    </div>
  )

}

export default App;