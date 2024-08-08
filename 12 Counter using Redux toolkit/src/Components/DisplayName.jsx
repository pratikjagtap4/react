import React, { memo } from 'react'
import { useSelector } from 'react-redux'

const DisplayName = () => {

    const counterName = useSelector(store => store.counter.counterName);
    const counterSirname = useSelector(store => store.counter.counterSirname);
    console.log("name comp render ...")

    return (
        <>
            < p className="mb-3 font-normal text-white text-center" > counterName  : {counterName}</p >
            < p className="mb-3 font-normal text-white text-center" > counterSirName  : {counterSirname}</p >
        </>
    )
}

export default DisplayName