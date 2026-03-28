import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Form from './components/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex flex-col mx-auto  max-w-4xl h-screen'>
        <Form/>

      </div>
    </>
  )
}

export default App
