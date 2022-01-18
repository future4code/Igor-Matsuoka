import {React, useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';
import useForm from "./useForm";
import { planets } from '../Constants/Planets'

const CreateArea = styled.div`
    border: 1px solid black;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    height: 70vh;
    width: 60%;
    margin-right: auto;
    margin-left: auto;
    align-content: center;
    justify-content: flex-start;
    align-items: center;
    box-shadow: 0px 5px 8px #708090;
    margin-top: 100px;
`

const Input = styled.input`
    margin-top: 10px;
    margin-bottom: 10px;
    width: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    border-radius: 15px;
    border: 1px solid black;
    background-color: white;
    height: 10px;
    width: 80px;
    display: flex;
    margin: 10px;
    padding: 10px;
    align-items: center;
    justify-content: center;

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

const Button = styled.button`
    text-decoration: none;
    border: 1px solid black;
    border-radius: 15px;
    background-color: white;
    height: 32px;
    width: 102px;
    display: flex;
    margin: 10px;
    padding: 10px;
    align-items: center;
    justify-content: center;

    :hover {
        color: white;
        background-color: grey;
    }
`

const SelectPlanet = styled.div`
    margin-top: 10px;
`

const ButtonArea = styled.div`
    display: flex;
    justify-content: center;
`

const useProtectedPage = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("token");
    
        if (token === null) {
          console.log("Não está logado!!!");
          navigate("/login");
        }
    }, []);
}

function CreateTrip(){
    useProtectedPage()

    const {form, onChange, cleanFields} = useForm({name: "", planet: "", date: "", description: "", durationInDays: ""})
    const token = localStorage.getItem('token')

    const createTrip = (event) =>{
        event.preventDefault()
        const body = form
        console.log(form)
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/igor-matsuoka-carver/trips", body,
            {
                headers: { 
                    auth: token
                }
            }   
        )
        .then((res) => {
            console.log("certo ", res.data)
            alert("Viagem criada!")
            cleanFields()
        })
        .catch((er) => {
            console.log("erro: ", er.response)
        })
    }

    return <CreateArea>
        <h1>CRIE UMA VIAGEM</h1>
        <form onSubmit={createTrip}>

            <Input
            name="name"
            value={form.name}
            onChange={onChange}
            placeholder="Nome da viagem"
            required
            />
            <Input
            name="description"
            value={form.description}
            placeholder="Descrição"
            onChange={onChange}
            required
            />
            <Input
            name="durationInDays"
            value={form.durationInDays}
            placeholder="Duração em dias"
            onChange={onChange}
            required
            />
            <input
            type="date"
            name="date"
            value={form.date}
            onChange={onChange}
            required
            />

            <SelectPlanet>
                {planets(onChange)}
            </SelectPlanet>

            <ButtonArea>
              <Button>Criar</Button>
              <StyledLink to="/admin/trips/list">Voltar</StyledLink>
            </ButtonArea>
            </form>
    </CreateArea>

}

export default CreateTrip;