import React from "react"
import { useParams } from "react-router-dom"
import { BASE_URL } from "../../constants/urls"
import { useRequestData } from "../../hooks/useRequestData"
import RepoCard from "../../components/RepoCard"
import ProfileCard from "../../components/ProfileCard"
import { useHistory } from "react-router-dom"
import { goToSearchPage } from "../../routes/coordinator"
import { ButtonContainer, CardContainer, RepositoryContainer, Title } from "./StyledProfilePage"
import { Button } from "@material-ui/core"

const ProfilePage = () => {
    const history = useHistory()
    const params = useParams()
    
    const user = useRequestData([], `${BASE_URL}/users/${params.username}`)

    const repos = useRequestData([], `${BASE_URL}/users/${params.username}/repos`)

    const reposResult = repos && repos
    .map((repo)=>{
        return <CardContainer key={repo.id}>
            <RepoCard
                html_url = {repo.html_url}
                name = {repo.name}
                description = {repo.description}
                language = {repo.language}
            />
        </CardContainer>
    })

    return (
        <div>
            <ButtonContainer>
            <Button variant="contained" onClick = {() => goToSearchPage(history)}>Voltar</Button>
            </ButtonContainer>
            <ProfileCard
                user={user}
            />
            <Title>REPOSITORIES</Title>
            <RepositoryContainer>
            {reposResult}
            </RepositoryContainer>
        </div>
    )
}

export default ProfilePage