import axios from 'axios';
import { React, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import useForm from "./useForm";
import { countries } from '../Constants/Countries'
import styled from 'styled-components';

const ApplicationFormDisplay = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 60vh;
    width: 40%;
    margin-left: auto;
    margin-right: auto;
    border-radius: 20px;
    box-shadow: 0px 5px 8px #708090;
    margin-top: 100px;
`

const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
    margin-left: auto;
    margin-right: auto;
    justify-content: flex-start;
`

const Input = styled.input`
    margin: 10px;
    width: 50vh;
`

const SelectCountry = styled.div`
    margin: 10px;
`
const Select = styled.select`
    margin: 10px;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    border: 1px solid grey;
    border-radius: 15px;
    background-color: white;
    height: 10px;
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

const Button = styled.button`
    text-decoration: none;
    border: 1px solid grey;
    border-radius: 15px;
    background-color: white;
    height: 32px;
    width: 60.81px;
    display: flex;
    margin: 10px;
    padding: 10px;
    align-items: center;

    :hover {
        color: white;
        background-color: grey;
    }
`

const ButtonArea = styled.div`
    display: flex;
`

function ApplicationForm() {

    const {form, onChange, cleanFields} = useForm({name: "", age: "", applicationText: "", profession: "", country: ""})

    const [id, setId]=useState("")
    const [listaTrips, setListaTrips] = useState([])

    useEffect(()=>{
        getTrips()
    }, [])

    const getTrips = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/igor-matsuoka-carver/trips')
        .then((res)=>{
            console.log(res.data)
            setListaTrips(res.data.trips)
        })
        .catch((err)=> {
            console.log(err)
        })
    }

    const applyToTrip = (id) => {
        const body = form
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/igor-matsuoka-carver/trips/${id}/apply`, body
        )
        .then((form)=>{
            alert("Sua inscrição foi realizada com sucesso. Boa sorte!", form);
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    const doApplication = (event) => {
        event.preventDefault()
        console.log(form)
        applyToTrip(id)
        cleanFields()
    }

    const onChangeId = (ev) => {
        setId(ev.target.value);
    };

    const tripsListNames = listaTrips.map((trip, index) => {
        return <option key={index} value={trip.id}>{trip.name} </option>
    })

    return <ApplicationFormDisplay>
        <h1>INSCREVA-SE EM UMA VIAGEM</h1>

        <Form onSubmit={doApplication}>

            <Select Select name="ordenação" onChange={onChangeId}>
            <option value={""}> Escolha uma viagem </option>
            {tripsListNames}
            </Select>
        
            <Input
            name="name"
            value={form.name}
            onChange={onChange}
            placeholder="Nome"
            required
            />
            <Input
            name="age"
            value={form.age}
            placeholder="Idade"
            onChange={onChange}
            required
            />
            <Input
            name="applicationText"
            value={form.applicationText}
            placeholder="Por que você merece a viagem?"
            onChange={onChange}
            required
            />
            <Input
            name="profession"
            value={form.profession}
            placeholder="Profissao"
            onChange={onChange}
            required
            />

            <SelectCountry>
            {countries(onChange)}
            </SelectCountry>

            <ButtonArea>
            <StyledLink to="/trips/list">Voltar</StyledLink>
            <Button onClick={applyToTrip}>Enviar</Button>
            </ButtonArea>
        </Form>

    </ApplicationFormDisplay>

}

export default ApplicationForm;