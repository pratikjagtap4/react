import { useState } from 'react'
import './App.css'
import './index.css'

function App() {
  const [color, setColor] = useState("olive");
  
 

  return (
      <div className = " full" style={{backgroundColor : color}} >
        <div className='buttons'>
        <button className='btn '  style={{backgroundColor : "red"}} onClick = {() => setColor("red")}>
          Red
        </button>

        <button className='btn'  style={{backgroundColor : "green"}} onClick = {() => setColor("green")}>
          Green
        </button>

        <button className='btn'  style={{backgroundColor : "pink"}} onClick = {() => setColor("pink")}>
          pink
        </button>
        <button className='btn'  style={{backgroundColor : "yellow"}} onClick = {() => setColor("yellow")}>
          yellow
        </button>
        <button className='btn'  style={{backgroundColor : "blue"}} onClick = {() => setColor("blue")}>
          blue
        </button>
        <button className='btn'  style={{backgroundColor : "orange"}} onClick = {() => setColor("orange")}>
          orange
        </button>
        </div>
      </div>

  )
}

export default App
