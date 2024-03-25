import './App.css'
import Video from "./component/Video"
import Data from './data'
import Play from './component/Play'
import Counter from './component/Counter'
import { useState } from 'react'
function App() {

  const [videos, setVideo] = useState(Data.slice(0,3))   //first 3 objects from Data array are store in variable videos

  function addVideo(){
    for(let i = videos.length; i< Data.length   ;i++)
    {
      setVideo([...videos , Data[videos.length] ]) // on each click next obejct of data array is added to the videos array
    }
  }

  return (
    <>
    <div>
      <button onClick={addVideo}>Add Video</button>
    </div>
      <div className='component'>
        {
          videos.map((vid) => {
            return <Video {...vid} > 
              <Play onPlay={() => console.log("Playing " + vid.title)} onPause={() => console.log("paused " + vid.title)}>{"play " + vid.title} </Play>
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


