import "./addVideo.css"

function AddVideo(){

    function handleClick(e){

    }

    return(
        <>
        <form >
            <input type="text"  placeholder="title"/>
            <input type="text" placeholder="channel"/>
            <input type="text" placeholder="views"/>
            <button onClick={handleClick}>AddVideo</button>
        </form>
        </>
    )
}

export default AddVideo;