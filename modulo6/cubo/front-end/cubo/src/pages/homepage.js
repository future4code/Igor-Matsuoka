import React from "react"
import UsersTable from "../components/usersTable"
import Header from "../constants/Header"
import ParticipationGraphic from "../components/participationGraphic"

const HomePage = () => {
  
    return (<div>

        <div>
        <Header/>
        </div>

        <div>
        <h1>DATA</h1>
        </div>

        <div>
        <UsersTable/>
        </div>

        <div>
        <ParticipationGraphic/>
        </div>
        
        </div>
    )
}

export default HomePage