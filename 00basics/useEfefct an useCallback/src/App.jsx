import { useState } from 'react'
import Card from './components/Card'
import './App.css'
import { useCallback } from 'react'
import { useRef } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [value, setValue] = useState(100)
  const colorRef = useRef()
  colorRef.current.style.color = "red"

  const updtateValue = () => {
    setValue(value + 1)
  }

  return (
    <div ref={colorRef}>
      <Card value={value} updtateValue={updtateValue}></Card>

      <p> count :   {count}</p>
      <button onClick={() => setCount(count + 1)}>Add count</button>
      <button onClick={() => setValue(value + 1)}>Add value</button>
    </div>
  )
}

export default App
