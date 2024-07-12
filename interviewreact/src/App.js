import { useState } from 'react';
import './App.css';
// import MyFile from './MyFile';
// import Counter from './components/Counter';
// import Card from './components/card';


function App() {
  // const info = {
  //   prodId : 101,
  //   country : "India",
  //   mfgDate : 2023,
  // }
  // const prices = [2000 , 1500]


  const [color, setColor] = useState("pink");
  return (
    <div className="App">
      <header className="App-header">
        <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
          <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
            <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
              <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
              style={{backgroundColor:"red"}} onClick={()=>setColor("red")}> Red</button>
              <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
              style={{backgroundColor:"green"}} onClick={()=>setColor("Green")}> Green</button>
              <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
              style={{backgroundColor:"yellow"}} onClick={()=>setColor("Yellow")}> Yellow</button>
              <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
              style={{backgroundColor:"blue"}} onClick={()=>setColor("Blue")}> Blue</button>
              <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
              style={{backgroundColor:"orange"}} onClick={()=>setColor("orange")}> orange</button>
            </div>
          </div>

        </div>
      </header>
    </div>

    /* <Counter/>
        <Card prodName = "MacBook" btnText = "VisitUs" information={info} pricing = {prices}> </Card>
        <Card prodName ="Samsung" btnText ="ContactUs"> Hello</Card>  */
    // <MyFile></MyFile>
  );
}

export default App;
