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

        return <table key={user.id}>
            
            <tr>
            <td>{position}</td>
            <td>{user.name}</td>
            <td>{user.lastName}</td>
            <td>{user.participation}%</td>
            </tr>

            </table>
    })

    return (<TableContainer>

            <table>
            <tr>
                <th>Name</th>
                <th>Last Name</th>
                <th>Participation(%)</th>
            </tr>
            </table>

            {usersResult}

        </TableContainer>
    )
}

export default UsersTable