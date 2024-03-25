import "./video.css"
function Video({ title , channel = "Chai Aur Code" , link , views , children,verified}) {

    // let verified = true;
    // let channelName;
    // if(verified){
    //     channelName = <h4 className="channel">{channel} ✅</h4>
    // }
    // else{
    //    channelName = <h4 className="channel">{channel} </h4>
    // }

    return (
        <>
            <div className="images">
                <img className=" img" src={link} />
                <div className="info">

                    <h3 className="title"> {title} </h3>
                    <h4 className="channel">{channel} { verified ? "✅" : null}</h4> 
                    <h4 className="views">views : {views} </h4>
                    <h4>{children}</h4>
                </div>
            </div>
        </>
    );
}



export default Video;