function Counter(){
    let number = 1;

    function increment(){
        number++
        console.log(number)
    }

    return(
        <>
            <p>{number}</p>
            <button onClick={increment}>Add</button>
        </>
    )
}

export default Counter