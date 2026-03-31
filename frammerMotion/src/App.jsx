import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Content from './components/Content'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=' h-screen max-w-2xl mx-auto'>
          <Content/>
      </div>
    </>
  )
}

export default App
