import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Controls, DisplayCounter, Header } from './components'
import { useSelector } from 'react-redux'
import Toggler from './components/Toggler'

function App() {
  const [count, setCount] = useState(0)
  const privacy = useSelector(store => store.privacy)
  return (
    <>
      <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 place-content-center mx-auto" >
        <a href="#">
          <Header></Header>
        </a>
        {privacy ? <Toggler /> : <DisplayCounter />}
        <Controls></Controls>
      </div>

    </>
  )
}

export default App
