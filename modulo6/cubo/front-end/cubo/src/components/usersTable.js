import React, { useState, useEffect } from "react";
import { getUsers } from "../API/getUsers";

const UsersTable = () => {

    const [person, setPerson] = useState([])

    useEffect(() => {
        getUsers(setPerson)
    }, [])

    const usersResult = person && person.map((user)=> {
        let index = person.indexOf(user)
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