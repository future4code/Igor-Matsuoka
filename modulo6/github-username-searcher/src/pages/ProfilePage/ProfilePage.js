import React from "react"
import { useParams } from "react-router-dom"
import { BASE_URL } from "../../constants/urls"
import { useRequestData } from "../../hooks/useRequestData"
import RepoCard from "../../components/RepoCard"
import ProfileCard from "../../components/ProfileCard"
import { useHistory } from "react-router-dom"
import { goToSearchPage } from "../../routes/coordinator"

const ProfilePage = () => {
    const history = useHistory()
    const params = useParams()
    
    const user = useRequestData([], `${BASE_URL}/users/${params.username}`)

    const repos = useRequestData([], `${BASE_URL}/users/${params.username}/repos`)

    const reposResult = repos && repos
    .map((repo)=>{
        return <div key={repo.id}>
            <RepoCard
                html_url = {repo.html_url}
                name = {repo.name}
                description = {repo.description}
                language = {repo.language}
            />
        </div>
    })

    return (
        <div>
            <button onClick = {() => goToSearchPage(history)}>Voltar</button>
            <ProfileCard
                user={user}
            />
            {reposResult}
        </div>
    )
}

export default ProfilePage