import { useState } from "react";
function Counter(){
    const [number , setNumber] = useState(0);

    function increment(){
        // setNumber(number => number +1)
        // setNumber(number => number +1)
        // setNumber(number => number +1)
        setNumber(number +1)

        // setTimeout(()=>{
        //     setNumber(number => number+1)
        // }, 2000)
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