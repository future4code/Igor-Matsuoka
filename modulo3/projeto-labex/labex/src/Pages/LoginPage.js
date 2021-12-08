import axios from 'axios';
import { React, useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
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

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const onSubmitLogin = () => {
        const body = {
            email: email,
            password: password
        }
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/igor-matsuoka-carver/login", body)
        .then((response) => {
            console.log("deu certo, ", response.data.token)
            localStorage.setItem("token", response.data.token);
            navigate("/admin/trips/list") 
        })
        .catch((error) => {
            console.log(error.response)
        })
    }

    return <LoginDisplay>

        <LoginInputs>
        <Welcome>LABE <Brand>X</Brand> </Welcome>
        <LoginTitle>LOGIN</LoginTitle>
        <InputLogin
            placeholder="E-mail"
            type="email"
            value={email}
            onChange={onChangeEmail}
        />
        <InputLogin
            placeholder="senha"
            type="password"
            value={password}
            onChange={onChangePassword}
        />

        <LinkArea>
        <StyledLink to="/">VOLTAR</StyledLink>
        <StyledLink to="/admin/trips/list" onClick={onSubmitLogin}>ENTRAR</StyledLink>
        </LinkArea>

        </LoginInputs>

    </LoginDisplay>

}

export default Login;