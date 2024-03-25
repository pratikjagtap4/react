
import { useState } from "react";
function AddVideo() {
    const [vid ,addVid] = useState({
        title:"",
        channel :"",
        views : "",
        link : "https://1000logos.net/wp-content/uploads/2020/09/Java-Emblem.jpg",
        verified : true,
        key : 2
    })
    function handleClick(e) {
        e.preventDefault();
        console.log(vid)
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
            {/* <h1>{vid}</h1> */}
        </form>
        <p>{vid.title}</p>
        </>
    );
}

export default AddVideo