import './App.css'
import Video from "./component/Video"
import Data from './data'
import Play from './component/Play'
import Counter from './component/Counter'
function App() {
  return (
    <>
      <div className='component'>
        {
          Data.map((video) => {
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


