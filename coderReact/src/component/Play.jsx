import "./Play.css"
function Play({onPlay ,onPause , children}){
    let playing = false ;
    function handleClick(){
        if(playing) onPause();
        else onPlay();

        playing = !playing
    }

    return(
        <button onClick={handleClick}>{children} </button>
    )
}
export default Play;