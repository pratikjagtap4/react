import React from 'react'
import "./App.css"
import { Login, Profile } from "./components"
import UserContextProvider from "./context/UserContextProvider"

function App() {
    return (
        <UserContextProvider>
            <h1>Add Users</h1>
            <Login></Login>
            <Profile></Profile>
        </UserContextProvider>
    )
}

export default App