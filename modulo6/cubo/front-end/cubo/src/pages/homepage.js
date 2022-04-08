import React from "react"
import UsersTable from "../components/usersTable"
import Header from "../constants/Header"
import ParticipationGraphic from "../components/participationGraphic"
import { HomePageContainer } from "./styledHomePage"
import { InfoContainer } from "./styledHomePage"

const HomePage = () => {
  
    return (<div>

        <div>
        <Header/>
        </div>

        <HomePageContainer>

        <div>
        <h1>DATA</h1>
        </div>

        <InfoContainer>
        <div>
        <UsersTable/>
        </div>

        <div>
        <ParticipationGraphic/>
        </div>
        </InfoContainer>

        </HomePageContainer>
        
        </div>
    )
}

export default HomePage