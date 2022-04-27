import React, { useContext, useEffect }from "react";
import GlobalStateContext from "../global/globalStateContext";
import { TableContainer } from "./styledUsersTable";
import { ButtonDelete } from "./styledUsersTable";

const UsersTable = (props) => {

    const { states, setters } = useContext(GlobalStateContext)

    useEffect(() => {
        setters.getUsers()
    }, [states.update])

    var total = states.person.reduce(getTotal, 0);
    function getTotal(total, user) {
        return total + (user.participation);
    }

    const usersResult = states.person && states.person.map((user, index)=> {
        return <tr key={user.id}>
        
            <td>{index + 1}</td>
            <td>{user.name}</td>
            <td>{user.lastName}</td>
            <td>{ ( (100/total) *user.participation ).toFixed(2)}%</td>
            <td><ButtonDelete onClick={() => setters.deleteUser(user.id)}>REMOVE</ButtonDelete></td>
        </tr>
    })

    return (<TableContainer>
          
            <table id="collapseTable">
            <tbody>
            <tr>
                <th></th>
                <th>Name</th>
                <th>Last Name</th>
                <th>Participation(%)</th>
                
            </tr>
         
            {usersResult}
            </tbody>
            </table>
           
        </TableContainer>
    )
}

export default UsersTable