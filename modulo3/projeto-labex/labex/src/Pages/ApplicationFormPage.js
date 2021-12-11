import axios from 'axios';
import { React, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import useForm from "./useForm";
import { countries } from '../Constants/Countries'

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

    return <div>
        <h1>INSCREVA-SE</h1>

        <form onSubmit={doApplication}>
        
            <select name="ordenação" onChange={onChangeId}>
            <option value={""}> Escolha uma viagem </option>
            {tripsListNames}
            </select>

            <input
            name="name"
            value={form.name}
            onChange={onChange}
            placeholder="nome"
            required
            />
            <input
            name="age"
            value={form.age}
            placeholder="idade"
            onChange={onChange}
            required
            />
            <input
            name="applicationText"
            value={form.applicationText}
            placeholder="texto"
            onChange={onChange}
            required
            />
            <input
            name="profession"
            value={form.profession}
            placeholder="profissao"
            onChange={onChange}
            required
            />
            {countries(onChange)}
            <Link to="/trips/list">Voltar</Link>
            <button>Enviar</button>
        </form>
    </div>

}

export default ApplicationForm;