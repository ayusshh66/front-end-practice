import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Child from './assets/components/Child'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className=' bg-white flex items-center mx-auto max-w-4xl h-screen  '>
          <Child/>
        </div>
      
    </>
  )
}

export default App
