import "./video.css"
function Video({ title, link }) {
    return (
        <>
            <div className="images">
                <img src={link} />
                <h3> {title} </h3>
            </div>
        </>
    );
}



export default Video;