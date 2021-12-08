import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const HomeDisplay = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 100vw;
    align-items: center;
    justify-content: center;
`

const HomeContainer = styled.div`
    border: 1px solid black;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    background-color: black;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 0px 5px 8px #708090;
    align-items: center;
    width: 35vw;
    height: 50vh;
`

const Title = styled.h1`
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 50px;
`

const Brand = styled.p`
    color: red;
    font-size: 70px;
`

const Subtitle = styled.h4`
    color: white;
`

const LinkArea = styled.div`
    display: flex;
    flex-direction: row;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    border: 1px solid grey;
    border-radius: 15px;
    background-color: white;
    height: 30px;
    display: flex;
    margin: 10px;
    padding: 10px;
    align-items: center;

    :visited {
        color: black;
    }
    :hover {
        color: white;
        background-color: grey;
    }
    :link{
        color: black;
    }

`

function Home() {

    return <HomeDisplay>

        <HomeContainer>
        <Title>
            SEJA BEM-VINDO A LABE 
            <Brand>X</Brand>
        </Title>

        <Subtitle>Prepare-se para viagens de outro mundo!</Subtitle>

        <LinkArea>
        <StyledLink to="trips/list">VER VIAGENS</StyledLink>
        <StyledLink to="login">ÁREA DO ADMIN</StyledLink>
        </LinkArea>
        </HomeContainer>

      </HomeDisplay>
}
  
export default Home;