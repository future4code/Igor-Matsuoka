import React, { useContext, useEffect }from "react";
import GlobalStateContext from "../global/globalStateContext";

const UsersTable = () => {

    const { states, setters } = useContext(GlobalStateContext)

    useEffect(() => {
        setters.getUsers()
    }, [])

    const usersResult = states.person && states.person.map((user)=> {
        let index = states.person.indexOf(user)
        let position = index + 1

        return <div key={user.id}>
            <div>{position}</div>
            <div>{user.name}</div>
            <div>{user.lastName}</div>
            <div>{user.participation}%</div>
        </div>
    })

    return (<div>
            {usersResult}
        </div>
    )
}

export default UsersTable