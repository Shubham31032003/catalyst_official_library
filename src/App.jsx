import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer'
import {Outlet} from 'react-router-dom'

import './App.css'
function App() {
  

  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
