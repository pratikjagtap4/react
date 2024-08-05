import React from 'react'
import UserContext from '../context/UserContext'
import { useRef } from 'react'
import { useContext } from 'react'

function Login() {
    const { users, setUsers } = useContext(UserContext)

    const unameRef = useRef(null)
    const passRef = useRef(null)

    function submit() {
        setUsers([...users, { name: unameRef.current.value, pass: passRef.current.value }])
    }
    return (
        <>
            <input
                type="text"
                placeholder='enter your username'
                ref={unameRef}
            />

            <input
                type="password"
                placeholder='enter your password'
                ref={passRef}
            />

            <button onClick={submit}>Submit</button>
        </>
    )
}

export default Login