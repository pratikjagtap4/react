import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'

function Controls() {

    const inputRef = useRef()
    const dispatch = useDispatch()

    function handleIncrement() {
        dispatch({ type: "Increment" })
    }
    function handleDecrement() {
        dispatch({ type: "Decrement" })
    }
    function handleAddition() {
        console.log(inputRef.current.value)
        dispatch({ type: "Add", payload: inputRef.current.value })
        inputRef.current.value = ""
    }
    function handleSubtraction() {
        console.log(inputRef.current.value)
        dispatch({
            type: "Sub", payload: inputRef.current.value
        })
        inputRef.current.value = ""
    }
    function toggler() {
        console.log(inputRef.current.value)
        dispatch({
            type: "Privacy"
        })
    }

    return (
        <>
            <div className='flex justify-center'>
                <button
                    className='text-white hover:text-orange-600 px-3 border'
                    onClick={handleIncrement}
                >Add</button>
                <button
                    className='text-white hover:text-orange-600 px-3 border mx-2'
                    onClick={handleDecrement}
                >Sub</button>
            </div>


            <div className='flex justify-center mt-5'>
                <input
                    ref={inputRef}
                    type="number"
                    className='mx-5'
                />
                <button
                    className='text-white hover:text-orange-600 px-3 border'
                    onClick={handleAddition}
                >Add</button>
                <button
                    className='text-white hover:text-orange-600 px-3 border mx-2'
                    onClick={handleSubtraction}
                >Sub</button>
                <button
                    className='text-white hover:text-orange-600 px-3 border mx-2'
                    onClick={toggler}
                >Toggler</button>
            </div>
        </>
    )
}

export default Controls