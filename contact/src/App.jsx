import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbars from './components/navbars'
import Contact from './components/contact'
import Addcontact from './components/addcontact'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbars/>
     <Contact/>
     <Addcontact/>
    </>
  )
}

export default App
