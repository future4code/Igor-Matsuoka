import React from "react"
import { goToSearchPage } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";
import UserCard from "../../components/UserCard";
import { useContext } from "react";
import GlobalStateContext from "../../Global/GlobalStateContexts";
import { useRequestData } from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";

const HistoryPage = () => {
    const history = useHistory();
    const { states } = useContext(GlobalStateContext)

    console.log(states.userHistory)
    const users = useRequestData([], `${BASE_URL}/users`)
    
    const usersResult = users
    .filter((user)=>{
        return user.login
        .toLowerCase()
        .includes(states.userHistory)
    })
    .map((user)=>{
        return <div key={user.id}>
            <UserCard
                src = {user.avatar_url}
                name = {user.name}
                login = {user.login}
            />
        </div>
    })

    return(<div>
        <button onClick = {() => goToSearchPage(history)}>Voltar</button>
        <div>History</div>
            <div>
                {usersResult}
            </div>  
        </div>
    )
}

export default HistoryPage;