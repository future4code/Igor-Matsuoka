import React from "react"
import { TextField } from "@mui/material"
import useForm from "../hooks/useForm"
import { Button } from "@mui/material"
import axios from "axios"
import { baseUrl } from "./baseUrl"

const Header = () => {
    const {form, handleInputOnChange, clear} = useForm({name:"", lastName:"", participation:""})

    const send = () => {
        axios.post(`${baseUrl}/users`, form)
        .then((res)=>{
            console.log(res)
        })
        .catch((error)=>{
            console.log(error.message)
        })
    }

    const onSubmitForm = (event) => {
        send(form)
        event.preventDefault()
        clear()
    }

    return (<div>
        <form onSubmit={onSubmitForm}>
        <TextField
            name={"name"}
            value={form.name}
            onChange={handleInputOnChange}
            label={"Name"}
            type={"text"}
            variant={"outlined"}
            margin={"dense"}
            width={200}
            required
        />

        <TextField
            name={"lastName"}
            value={form.lastName}
            onChange={handleInputOnChange}
            label={"Last name"}
            type={"text"}
            variant={"outlined"}
            margin={"dense"}
            width={200}
            required
        />

        <TextField
            name={"participation"}
            value={form.participation}
            onChange={handleInputOnChange}
            label={"Participation"}
            type={"text"}
            variant={"outlined"}
            margin={"dense"}
            width={200}
            required
        />

        <Button
            type={"submit"}
            size={"large"}
            variant={"outlined"}
            color={"primary"}
        >
            SEND
        </Button>
        </form>
        </div>
    )
}

export default Header