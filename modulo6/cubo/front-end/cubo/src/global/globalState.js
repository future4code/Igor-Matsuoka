import React, { useState } from "react";
import GlobalStateContext from "./globalStateContext"
import { baseUrl } from "../constants/baseUrl";
import axios from "axios";

const GlobalState = (props) => {

    const [person, setPerson] = useState([])
    const [update, setUpdate] = useState(0)


    const getUsers = () => {
        const url = `${baseUrl}/users`
        axios.get(url)
        .then((res)=>{
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

    const deleteUser = (id) => {
        const url = `${baseUrl}/users/delete/${id}`
        axios.delete(url)
        .then((res)=>{
            getUsers()
        })
        .catch((error)=>{
            console.log(error.response)
        })
    }


    const states = { person, update }
    const setters = { setPerson, getUsers, send, setUpdate, deleteUser }

    return (
        <GlobalStateContext.Provider value={{states, setters}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState;