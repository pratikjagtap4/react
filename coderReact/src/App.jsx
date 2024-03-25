import './App.css'
import Video from "./component/Video"
import Data from './data'
import Play from './component/Play'
import Counter from './component/Counter'
import { useState } from 'react'
function App() {
  const [videos, setVideo] = useState(Data.slice(0,3))
  function addVideo(){
    for(let i = videos.length; i< Data.length   ;i++)
    {
      setVideo([...videos , Data[videos.length] ])
    }
  }

  return (
    <>
    <div>
      <button onClick={addVideo}>Add Video</button>
    </div>
      <div className='component'>
        {
          videos.map((video) => {
            return <Video {...video} >
              <Play onPlay={() => console.log("Playing " + video.title)} onPause={() => console.log("paused " + video.title)}>{"play " + video.title} </Play>
            </Video>
          })
        }
      </div>
      {/* <Play onPlay = {()=>console.log("play ")} onPause = {()=>console.log("pause ")}>Play </Play> */}
      {/* <Play onClick = {()=>console.log("Pause button is clicked")}>Pause</Play> */}
      <Counter></Counter>
    </>
  )
}

export default App;


