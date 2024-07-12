function Buttons({onclickfn , btnText }) {
    return (
        <>
            <button onClick={onclickfn}>{btnText} </button>
            {/* <button onClick={onclickfn}>{btnText}</button> */}
        </>
    )
}

export default Buttons;