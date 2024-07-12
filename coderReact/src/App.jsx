import './App.css'
import Data from './data'
import { useState } from 'react'
import AddVideo from './component/AddVideo'
import VideoList from './component/VideoList'

function App() {
  console.log("render app")

  const [videos, setVideo] = useState(Data)   //first 3 objects from Data array are store in variable videos

  // function addVideo(){
  //   for(let i = videos.length; i< Data.length   ;i++)
  //   {
  //     setVideo([...videos , Data[videos.length] ]) // on each click next obejct of data array is added to the videos array
  //   }
  // }
  function addNewVideo(video){
    setVideo([... videos , {...video , id : videos.length+1} ])
  }

  function deleteVideo(key)
  {
    setVideo(videos.filter((video)=>video.id !==key))
    console.log("delete video" + key )
  }

  return (
    <>
    <div>
      {/* <button onClick={addVideo}>Add Video</button> */}
      <AddVideo  onAddVideo = {addNewVideo}></AddVideo>
      <VideoList onDeleteVideo ={deleteVideo} videos ={videos}></VideoList>
    </div>
      
    </>
  )
}

export default App;


