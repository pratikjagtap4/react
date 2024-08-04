import { useState } from "react";
import Buttons from "./Buttons";

function Counter() {
    let [count , setCount] = useState(1)
    // let count= 1;

    function addValue()
    {
        count++;
        setCount(count);
        console.log(count);
    }

    function subValue()
    {
        if(count>0)
        {
            count--;
            setCount(count)
        }
        console.log(count);
    }

    return (
        <>
            <p className="bg-red-600">Value of counter is {count}</p>
            
            <Buttons onclickfn = {addValue} btnText="Add Value" />
            <Buttons onclickfn = {subValue} btnText="Dectrease Value"/>
            
            </>
    )
}

export default Counter;