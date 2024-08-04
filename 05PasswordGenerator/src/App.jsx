import "./App.css"
import { useState, useCallback, useEffect, useRef } from "react"
function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const inputRef = useRef()


  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%&*-="

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword])

  const copytoClip = useCallback(() => {
    console.log(password);
    inputRef.current?.select( )
    window.navigator.Clipboard.writeText(password)
  }, [password])


  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, passwordGenerator])



  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500 container">
      <h1 className='text-white text-center my-3'>Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          value={password}
          ref={inputRef}
        />
        <button
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 gap-x-1'
          onClick={copytoClip}
        >copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
            type="range"
            className='cursor-pointer'
            max={20}
            min={5}
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
          <label>Length:{length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            id="numberInput"
            value={numAllowed}
            onClick={() => setNumAllowed((prev) => !prev)}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            id="characterInput"
            value={charAllowed}
            onClick={() => setCharAllowed(prev => !prev)}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App