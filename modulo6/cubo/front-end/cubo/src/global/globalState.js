import React, { useState } from "react";
import GlobalStateContext from "./globalStateContext"
import { baseUrl } from "../constants/baseUrl";
import axios from "axios";

const GlobalState = (props) => {

    const [person, setPerson] = useState([])

    const getUsers = () => {
        const url = `${baseUrl}/users`
        axios.get(url)
        .then((res)=>{
            console.log(res.data)
            setPerson(res.data.user)
        })
        .catch((error)=>{
            console.log(error.data)
        })
    }

    const send = (form) => {
        axios.post(`${baseUrl}/users/submit`, form)
        .then((res)=>{
            console.log(res)
        })
        .catch((error)=>{
            console.log(error.message)
        })
    }


    const states = { person }
    const setters = { setPerson, getUsers, send }

    return (
        <GlobalStateContext.Provider value={{states, setters}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState;