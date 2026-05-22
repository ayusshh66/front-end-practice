import React from 'react'
import { motion } from "motion/react"

function App() {
  return (
    <div className='body w-full h-full'>
      <div className='flex justify-center items-center h-screen '>
        <motion.div
        >
        <button className='w-25 h-10 bg-blue-500 px-4 py-2 rounded-lg text-white active:scale-98 duration-150 cursor-pointer '>
            button
        </button>
        </motion.div>
      </div>
    </div>
  )
}

export default App