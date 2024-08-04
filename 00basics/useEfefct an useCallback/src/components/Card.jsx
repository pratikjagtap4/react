import React from 'react'
import { memo } from 'react';

const Card = React.memo(({ value, updtateValue }) => {
    console.log("card is render");


    return (
        <>
            <div>Card</div>
            <p>Value:{value}</p>
            <button onClick={updtateValue}>add value</button>
        </>
    )
})

export default Card