import React, { useRef } from 'react'
import { motion } from "motion/react"

function App() {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rx = (y / (rect.height / 2)) * -5; // rotate X
    const ry = (x / (rect.width / 2)) * 5; // rotate Y
    el.style.transform = `perspective(600px) rotateX(${rx}deg) rotateY(${ry}deg)`;
  }

  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = '';
  }



  return (
    <div className='body w-full h-full'>
      <div className='flex justify-center items-center h-screen '>
        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          ref={ref}
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