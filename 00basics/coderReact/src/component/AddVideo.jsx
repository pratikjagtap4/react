import { useState } from "react"
import "./addVideo.css"

function AddVideo({ onAddVideo }) {


    const initialState ={
        title: "",
        channel: "",
        views: "",
        link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFZfFIjJBgO_k3yOPYbpYs5XDQXMmxK8Z_LzmsZ8-sgw&s",
        verified: false,
        key : "",
        id:""
    }
    const [video, setVideo] = useState(initialState)

    function handleClick(e) {
        e.preventDefault()
        onAddVideo(video)
        setVideo(initialState)
    }

    function handleChange(e) {
        // addVideo({...video , [e.target.name] : e.target.value})
        setVideo({ ...video, [e.target.name]: e.target.value  })
    }

    return (
        <>
            <form >
                <input type="text" onChange={handleChange} name="title" placeholder="title" value={video.title}/>
                <input type="text" onChange={handleChange} name="channel" placeholder="channel" value={video.channel}/>
                <input type="text" onChange={handleChange} name="views" placeholder="views" value={video.views}/>
                <button onClick={handleClick}>AddVideo</button>
                <p>{video.key}</p>
            </form>
        </>
    )
}

export default AddVideo;