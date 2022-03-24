import React from "react"
import useForm from "../../hooks/useForm"
import { BASE_URL } from "../../constants/urls"
import { useRequestData } from "../../hooks/useRequestData"
import UserCard from "../../components/UserCard"
import { TextField } from "@material-ui/core"
import { goToHistoryPage } from "../../routes/coordinator"
import { useHistory } from "react-router-dom"

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
            <button onClick = {() => goToHistoryPage(history)}>History</button>

            <TextField
                name={"userFilter"}
                value={form.login}
                onChange={handleInputOnChange}
                label={"Search user..."}
                type={"text"}
                variant={"outlined"}
                fullWidth
                margin={"dense"}
            />

            <div>
                {usersResult}
            </div>  
        </div>
    )
}

export default SearchPage