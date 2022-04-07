import React from "react"
import { goToSearchPage } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";
import UserCard from "../../components/UserCard";
import { useContext } from "react";
import GlobalStateContext from "../../Global/GlobalStateContexts";
import { ButtonContainer, HistoryContainer, MessageContainer } from "./StyledHistoryPage";
import { Button } from "@material-ui/core";

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
        <ButtonContainer>
        <Button variant="contained" onClick = {() => goToSearchPage(history)}>Voltar</Button>
        </ButtonContainer>
        <HistoryContainer>SEARCH HISTORY</HistoryContainer>
            <div>
            {reverseUsersResult.length > 0 
            ? reverseUsersResult 
            : <MessageContainer>Você ainda não realizou nenhuma busca!</MessageContainer>}
            </div>  
        </div>
    )
}

export default HistoryPage;