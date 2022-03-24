import React, { useState } from "react";
import GlobalStateContext from "./GlobalStateContexts";


const GlobalState = (props) => {

    const [userHistory, setUserHistory] = useState([])

    const addHistory = (login) => {
        const newHistory = [...userHistory, login]
        setUserHistory(newHistory)
    }

    const states = { userHistory }
    const setters = { setUserHistory, addHistory }

    return (
        <GlobalStateContext.Provider value={{states, setters}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState;