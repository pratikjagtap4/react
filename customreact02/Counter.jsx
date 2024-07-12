import React from "react";
const Counter = React.memo(({count,onIncrement}) =>
{
    console.log("counter render")
    return(
        <>
            <p>Count : {count}</p>
            <button onClick={onIncrement}>AddCount</button>
        </>
    );
})

export default Counter;