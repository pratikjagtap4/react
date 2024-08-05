import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'


function Profile() {

    const { users } = useContext(UserContext)

    if (users.length === 0) return <div>Please Enter User</div>

    return (
        <div>
            {users.map(user => <p>username is : {user.name} and password is : {user.pass}</p>)}
        </div>
    )
}

export default Profile