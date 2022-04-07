import React, { useState, useEffect } from "react";
import { getUsers } from "../API/getUsers";
import 

const UsersTable = () => {

    useEffect(() => {
        getUsers()
    }, [])

    const usersResult = states.person && states.person.map((user)=> {
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