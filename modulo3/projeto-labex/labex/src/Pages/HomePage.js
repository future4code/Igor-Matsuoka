import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'

const StyledLink = styled(Link)`
    text-decoration: none;
    border: 1px solid black;
`

function Home() {

    return <div>
        <h1>SEJA BEM-VINDO A LABEX</h1>
        <StyledLink to="trips/list">Ver Viagens</StyledLink>
        <StyledLink to="login">Área do Admin</StyledLink>
      </div>
}
  
export default Home;