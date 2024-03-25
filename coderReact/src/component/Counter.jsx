import { useState } from "react";
function Counter(){
    const [number , setNumber] = useState(0);

    function increment(){
        setNumber(number +1)
        console.log(number)
    }

    return(
        <>
            <p>{number}</p>
            <button onClick={increment}>Add</button>
        </>
    )
}

export default Counter