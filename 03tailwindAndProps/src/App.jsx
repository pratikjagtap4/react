import { useState } from 'react'
import './App.css'
import Card from './component/card'

function App() {
  const myObj = {
    username : "pratik Jagtap",
    age : 22,
    followers : 1000,
    country : "india"
  }
  const myObj2 = {
    username : "Swapnil Dahiphale",
    age : 23,
    followers : 2000,
    country : "india"
  }
  const myArr = [1,2,3]
  return (
    <>
      <h1 className='bg-green-400 rounded-xl text-black p-5'>Props</h1>
      <Card userdetails = {myArr}/>
      <br />
      {/* <Card userdetails={myObj2}/> */}
      
    </>
  )
}

export default App
