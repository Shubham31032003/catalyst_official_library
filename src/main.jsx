import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Component/Home/Home.jsx'
import JeeMains from './Component/JeeMains/JeeMains.jsx'
import ContactUs from './Component/Contact/ContactUs.jsx'
import About from './Component/About/About.jsx'
import TakeAQuiz from './Component/Quiz/TakeAQuiz.jsx'
import Neet from './Component/NEET/Neet.jsx'
import JeeAdv from './Component/JeeAdv/JeeAdv.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<ContactUs/>}/>
      <Route path='/quiz' element={<TakeAQuiz/>}/>
      <Route path='/jeemains' element={<JeeMains/>}/>
      <Route path='/neet' element={<Neet/>}/>
      <Route path='/jeeadv' element={<JeeAdv/>}/>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
