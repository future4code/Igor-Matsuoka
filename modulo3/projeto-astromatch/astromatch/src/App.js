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