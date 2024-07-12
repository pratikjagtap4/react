import { useState, useCallback } from 'react';
import './index.css'

function App() {

  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHJKILMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*<>?+-|";

    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(index);
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
          />
          <button className='outline-none bg-blue-700 text-white px-3 py-1 shrink-0'>Copy</button>
          <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gapx-1'>
              <label htmlFor="length">
                <input
                  type="range"
                  id='length'
                  min={8}
                  max={30}
                  value={length}
                  className='cursor-pointer'
                  onChange={(e) => { setLength(e.target.value) }}
                />
                Length : {length}
              </label>
            </div>


            <div className="flex items-center gap-x-1">
              <label htmlFor="numInput">
                <input
                  type="checkbox"
                  defaultChecked={numAllowed}
                  id='numInput'
                  onChange={() => {
                    setNumAllowed((prev) => !prev)
                  }}
                />
                NumberAllowed
              </label>
            </div>


            <div className="flex items-center gap-x-1">
              <label htmlFor="charInput">
                <input
                  type="checkbox"
                  defaultChecked={charAllowed}
                  id='charInput'
                  onChange={() => {
                    setCharAllowed((prev) => !prev)
                  }}
                />
                CharacterAllowed
              </label>
            </div>


          </div>
        </div>
      </div>
    </>
  );
}

export default App;