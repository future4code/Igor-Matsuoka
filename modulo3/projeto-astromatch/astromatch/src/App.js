
import React from 'react'
import Display from './components/Display/Display';
import styled from 'styled-components';

const AppContainer = styled.div`
  background-color: white;
`

const App = () => {

  return(
    <AppContainer>
      <Display/>
    </AppContainer>
  )

}

export default App;

import styled from 'styled-components';
import React, { useState } from 'react';
/* import DisplayTelaInicial from './components/DisplayTelaInicial';
import TelaMatches from './components/TelaMatches'; */

const AppContainer = styled.div `
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

function App(){
  return(
    <AppContainer>
    </AppContainer>
  )
}
export default App

