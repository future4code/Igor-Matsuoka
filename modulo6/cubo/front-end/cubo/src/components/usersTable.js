import React, { useContext, useEffect }from "react";
import GlobalStateContext from "../global/globalStateContext";
import { TableContainer } from "./styledUsersTable";

const UsersTable = () => {

    const { states, setters } = useContext(GlobalStateContext)

    useEffect(() => {
        setters.getUsers()
    }, [])

    const usersResult = states.person && states.person.map((user)=> {
        let index = states.person.indexOf(user)
        let position = index + 1

        return <tr key={user.id}>
        
            <td>{position}</td>
            <td>{user.name}</td>
            <td>{user.lastName}</td>
            <td>{user.participation}%</td>

            </tr>
    })

    return (<TableContainer>

            <table id="collapseTable">

            <tr>
                <th></th>
                <th>Name</th>
                <th>Last Name</th>
                <th>Participation(%)</th>
            </tr>

            {usersResult}

            </table>

        </TableContainer>
    )
}

export default UsersTable