import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const LoginDisplay = styled.div`
    background-color: white;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
`

const Welcome = styled.h1`
    color: black;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 20%;
`

const Brand = styled.p`
    color: red;
    font-size: 70px;
`

const LinkArea = styled.div`
    display: flex;
    flex-direction: row;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    border: 1px solid white;
    border-radius: 15px;
    background-color: black;
    height: 30px;
    display: flex;
    margin: 10px;
    padding: 10px;
    align-items: center;
    justify-content: center;
    width: 60px;
    :visited{
        color: white;
    }
    :hover{
        color: black;
        background-color: grey;
    }
    :link{
        color: white;
    }
`

const LoginInputs = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 60%;
    width: 30%;
    background-color: white;
    margin-right: auto;
    margin-left: auto;
    border-radius: 20px;
    justify-content: flex-start;
    box-shadow: 0px 5px 8px #708090;
    border: 1px solid black;
`

const LoginTitle = styled.h1`
    color: black;
`

const InputLogin = styled.input`
    width: 70%;
    margin-bottom: 15px;
`

function Login(){
    return <LoginDisplay>

        <LoginInputs>
        <Welcome>LABE <Brand>X</Brand> </Welcome>
        <LoginTitle>Login</LoginTitle>
        <InputLogin
            placeholder="E-mail"
        />
        <InputLogin
            placeholder="senha"
        />

        <LinkArea>
        <StyledLink to="/">Voltar</StyledLink>
        <StyledLink to="/admin/trips/list">Entrar</StyledLink>
        </LinkArea>

        </LoginInputs>

    </LoginDisplay>

}

export default Login;