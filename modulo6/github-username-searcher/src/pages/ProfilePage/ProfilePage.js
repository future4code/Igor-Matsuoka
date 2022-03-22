import React from "react"
import { useParams } from "react-router-dom"
import { BASE_URL } from "../../constants/urls"
import { useRequestData } from "../../hooks/useRequestData"
import RepoCard from "../../components/RepoCard"
import ProfileCard from "../../components/ProfileCard"

const ProfilePage = () => {
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
            <ProfileCard
                src = {user.avatar_url}
                name = {user.name}
                login = {user.login}
                location = {user.location}
                company = {user.company}
                email = {user.email}
                public_repos = {user.public_repos}
                public_gists = {user.public_gists}
                followers = {user.followers}
                following = {user.following}
            />

            {reposResult}
        </div>
    )
}

export default ProfilePage