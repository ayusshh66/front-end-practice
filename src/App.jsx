import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
<<<<<<< HEAD
import Child from './assets/components/Child'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className=' bg-white flex items-center mx-auto max-w-4xl h-screen  '>
          <Child/>
        </div>
      
=======
import Navbar from './components/Navbar'
import { BrowserRouter } from "react-router-dom";
import Anime from './components/Anime'
import {ThemeProvider} from 'next-themes'


function App() {

  
  return (
    <>
    
      <BrowserRouter>
      
      <Navbar/>
      <Anime/>
      
      </BrowserRouter>
      {/* </ThemeProvider> */}
>>>>>>> 5d42b07a4a0b05f6d90b0d96e92fa31fe35b6439
    </>
  )
}

export default App
