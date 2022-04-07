import React from "react"
import { isPropertySignature } from "typescript"
import { Graphic } from "../components/participationGraphic"
import UsersTable from "../components/usersTable"
import Header from "../constants/Header"

const HomePage = () => {

    return (<div>
        <Header/>
        DATA
        <UsersTable/>
        <Graphic/>
        </div>
    )
}

export default HomePage