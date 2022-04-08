import React, { useState } from "react"
import UsersTable from "../components/usersTable"
import Header from "../constants/Header"
import ParticipationGraphic from "../components/participationGraphic"
import { HomePageContainer } from "./styledHomePage"
import { InfoContainer } from "./styledHomePage"
import { GraphicContainer } from "./styledHomePage"
import { TitleContainer } from "./styledHomePage"

const HomePage = () => {
  
    return (<div>

        <div>
        <Header/>
        </div>

        <HomePageContainer>

        <TitleContainer>
        <h1>DATA</h1>
        <h4>Adicione seu nome, sobrenome e participação e veja em porcentagem(%) a sua participação!</h4>
        </TitleContainer>

        <InfoContainer>
        <div>
        <UsersTable/>
        </div>

        <GraphicContainer>
        <ParticipationGraphic/>
        </GraphicContainer>

        </InfoContainer>

        </HomePageContainer>
        
        </div>
    )
}

export default HomePage