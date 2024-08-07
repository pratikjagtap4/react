import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { AboutUs, Home, Contact, Education, Projects, User } from './component/index.js'



// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "/AboutUs",
//         element: <AboutUs />,
//       },
//       {
//         path: "/Contact",
//         element: <Contact />,
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path='' element={<AboutUs />} />
      <Route path='Contact' element={<Contact />} >
        <Route path='/Contact/user' element={<User />} />
      </Route>
      <Route path='Education' element={<Education />} />
      <Route path='Projects' element={<Projects />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
