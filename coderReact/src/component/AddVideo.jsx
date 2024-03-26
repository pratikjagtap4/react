
import { useState } from "react";

function AddVideo({onAddVideo}) {

    const [vid ,addVid] = useState({
        title:"",
        channel :"",
        views : "",
        link : "https://logos-world.net/wp-content/uploads/2023/02/JavaScript-Symbol.png",
        verified : true,

    })

    function handleClick(e) {
        e.preventDefault();
        onAddVideo(vid)
        // console.log(vid)
    }

    function handleChange(e) {
        addVid({...vid , [e.target.name] : e.target.value})
    }

    return (

        <>

        <form >
            <input type="text" placeholder="title" onChange={handleChange} name="title"/>
            <input type="text" placeholder="channel" onChange={handleChange} name="channel"/>
            <input type="text" placeholder="views" onChange={handleChange} name="views"/>
            <button onClick={handleClick}>AddVideo</button>
        </form>
        
        </>
    );
}

export default AddVideo