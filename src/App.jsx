import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
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
    </>
  )
}

export default App
