
import { useSelector } from 'react-redux'
import { Controls, Display, DisplayName, Header, Privacy } from './Components'

function App() {
  const privacy = useSelector(store => store.privacy)

  return (
    <>
      <div className='bg-gray-500 p-10'>

        <Header></Header>
        {privacy ? <Privacy /> : <Display />}
        <DisplayName></DisplayName>
        <Controls></Controls>
      </div>
    </>
  )
}

export default App
