import React from 'react'
import { useSelector } from 'react-redux'

function DisplayCounter() {
    const counter = useSelector((store) => store.counter)
    return (
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">Counter  : {counter}</p>

    )
}

export default DisplayCounter