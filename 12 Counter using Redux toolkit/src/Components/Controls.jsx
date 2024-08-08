import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { counterAction, privacyAction } from '../Store'


function Controls() {
    const dispatch = useDispatch()
    const inputRef = useRef()

    function handleIncrement() {
        dispatch(counterAction.increment());
    }
    function handleDecrement() {
        dispatch(counterAction.decrement());
    }
    function handleAddition() {
        dispatch(counterAction.addition({ num: inputRef.current.value }));
        inputRef.current.value = "";
    }
    function handleSubtraction() {
        dispatch(counterAction.subtraction(inputRef.current.value));
        inputRef.current.value = "";
    }
    function toggler() {
        dispatch(privacyAction.toggle())
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
                <button
                    className='text-white hover:text-orange-600 px-3 border mx-2'
                    onClick={toggler}
                >Toggler</button>
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

            </div>
        </>
    )
}

export default Controls