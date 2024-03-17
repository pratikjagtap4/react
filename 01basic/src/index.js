import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';




function MyApp(){
  return(
    <h1>Hello Pratik Jagtap</h1>
  )
}

// const rootElement = {
//   type : 'a',
//   props : {
//     href : 'https://www.google.com/',
//     target : '_blank'
//   },
//   children : "Click to visit Google"
// }

const rootElement = React.createElement(
  'a',
  {
    href : 'https://www.google.com/',
    target : '_blank'
  },
 
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    // <MyApp/>
    rootElement
  // </React.StrictMode>
);

