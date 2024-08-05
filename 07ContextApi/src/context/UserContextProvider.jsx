import React from 'react'
import UserContext from "./UserContext"
import { useState } from 'react'

function UserContextProvider({ children }) {
    const [users, setUsers] = useState([])

    return (
        <UserContext.Provider value={{ users, setUsers }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider