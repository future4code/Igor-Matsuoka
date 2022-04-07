import React from "react"
import useForm from "../../hooks/useForm"
import { BASE_URL } from "../../constants/urls"
import { useRequestData } from "../../hooks/useRequestData"
import UserCard from "../../components/UserCard"
import { goToHistoryPage } from "../../routes/coordinator"
import { useHistory } from "react-router-dom"
import { Button, TextField } from "@material-ui/core"
import { ButtonContainer, InputContainer  } from "./StyledSearchPage"

const SearchPage = () => {
    const history = useHistory();

    const {form, handleInputOnChange} = useForm({userFilter: ""})

    const users = useRequestData([], `${BASE_URL}/users`)

    const usersResult = users
    .filter((user)=>{
        return user.login
        .toLowerCase()
        .includes(form.userFilter.toLowerCase())
    })
    .map((user)=>{
        return(
            <UserCard
                key={user.id}
                user={user}
            />
        )
    })

    return (
        <div>
            <ButtonContainer>
            <Button variant="contained" onClick = {() => goToHistoryPage(history)}>History</Button>
            </ButtonContainer>
            <InputContainer>
            <TextField
                name={"userFilter"}
                value={form.login}
                onChange={handleInputOnChange}
                label={"Search user..."}
                type={"text"}
                variant={"outlined"}
                margin={"dense"}
                width={200}
            />
            </InputContainer>
            <div>
                {usersResult}
            </div>  
        </div>
    )
}

export default SearchPage