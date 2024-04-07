import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbars from './components/navbars'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbars/>
    </>
  )
}

export default App
