// import Video from "./component/Video"
import Video from "./Video.jsx"
import Play from './Play'
import Counter from './Counter'

function VideoList({ videos }) {
    return (
        <div className='component'>
            {
                videos.map((vid) => {
                    return <Video {...vid} >
                        <Play onPlay={() => console.log("Playing " + vid.title)} onPause={() => console.log("paused " + vid.title)}>{"play " + vid.title} </Play>
                    </Video>
                })
            }
            {/* <Play onPlay = {()=>console.log("play ")} onPause = {()=>console.log("pause ")}>Play </Play> */}
            {/* <Play onClick = {()=>console.log("Pause button is clicked")}>Pause</Play> */}
            {/* <Counter></Counter> */}
        </div>
    )
}

export default VideoList;