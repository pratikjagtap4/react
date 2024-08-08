import React from 'react'
import { useSelector } from "react-redux"
function Display() {
    const counterVal = useSelector(store => store.counter.counterVal)
    console.log("val comp rendered ...")
    return (
        <>
            <p className="mb-3 font-normal text-white text-center">Counter  :{counterVal}  </p>
        </>
    )
}

export default Display