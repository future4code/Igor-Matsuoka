import React from "react"
import { goToSearchPage } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";
import UserCard from "../../components/UserCard";
import { useContext } from "react";
import GlobalStateContext from "../../Global/GlobalStateContexts";

const HistoryPage = () => {
    const history = useHistory();
    const { states } = useContext(GlobalStateContext)

    const usersResult = states.userHistory.map((user)=>{
        return(
            <UserCard key={user.id}
                user={user}
            />
        )
    })

    const reverseUsersResult = usersResult.reverse()

    return(<div>
        <button onClick = {() => goToSearchPage(history)}>Voltar</button>
        <div>History</div>
            <div>
            {reverseUsersResult.length > 0 
            ? reverseUsersResult 
            : <h3>Você ainda não realizou nenhuma busca!</h3>}
            </div>  
        </div>
    )
}

export default HistoryPage;