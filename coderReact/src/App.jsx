import './App.css'
import Video from "./component/Video"
import Data from './data'
import Playbutton from "./component/Playbutton"

function App() {
  return (
    <>
      <div className='component'>
        {
          Data.map((video) => {
            return <Video {...video} ></Video>
          })
        }
      </div>

      <Playbutton>  </Playbutton>
    </>
  )
}

export default App;


