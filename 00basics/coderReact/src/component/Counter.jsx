import { useState } from "react";
function Counter(){
    console.log("render counter")
    const [number , setNumber] = useState(0);

    function increment(){
        // setNumber(number +1)
        // setNumber( number +4)
        // setNumber( number +6)

        setNumber(prev => prev +1)
        setNumber(prev => prev +2)
        setNumber(prev => prev +3)
        setNumber(prev => prev +4)

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