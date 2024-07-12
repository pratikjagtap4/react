import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let [counter , setCounter] = useState(10)
const addValue =  () => {
    // counter = counter +1;
    console.log("value of counter is: " , counter)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    console.log("value of counter is: " , counter)
  

}

const removeValue = () => {
  if(counter>=0){

    setCounter(counter - 1)
    setCounter(counter - 1)
    setCounter(counter - 1)
    // counter= counter - 1;
    console.log("value of counter is counter" , counter);
  }
}

  return (
    <>
      
        <h1>Counter </h1>
        <h3>Counter : {counter} </h3>
        <p>more counter : {counter} </p>

        <button onClick={addValue}>increase value : {counter}</button>
        <br />
        <br />
        <button onClick={removeValue}> decrease value: {counter}</button>


    </>
  )
}

export default App
