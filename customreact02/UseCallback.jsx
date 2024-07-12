import { useState , useCallback , useEffect } from 'react';
import './App.css';
import Counter from './Counter';

function UseCallback() {
  
  const [count, setCount] = useState(0);
  const [otherCount , setOtherCount] = useState(false);
  
  

  const addValue = useCallback(() =>{
    setCount(prevCount  => prevCount +1);
  } ,[count])

  useEffect(()=>{
    alert("app is render")
  },[otherCount])

  return (
    <>
      <h1>Hello</h1>
      <Counter count={count} onIncrement={addValue} />
      <p>{otherCount}</p>
      <button onClick={() => setOtherCount(!otherCount)}>change   </button>
    </>
  );
}

export default UseCallback;
