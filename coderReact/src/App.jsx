import './App.css'
import Video from "./component/Video"
import Data from './data'

function App() {

  

  return (
    <>
      <div className='component'>
      {
        Data.map((video) =>
        {
         return <Video {... video} ></Video>
          

        })
      }
        
      </div>
    </>
  )
}
   
export default App;


{/* <Video {... React}>Learn react in Fun way</Video>
    <Video {... Java}  >Chai Ready To code bhi Ready hai</Video>
    <Video {... MongoDb} > please Subscribe Guyts</Video> */}