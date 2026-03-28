import React from 'react'
// import {useTheme} from 'next-themes'
import { useState } from 'react'

function Anime() {
      const [theme, setTheme] = useState('light')



 const handleThemeChange = () => {
   const dark = document.getElementsByClassName("bdy")
   if(dark.classList === "dark") dark.classList.add("bg-black")

  }


  return (
    <>
   <div className='flex justify-center items-center my-20'>
    <div className= 'reletive bg-neutral-600 w-100 h-100 rounded-xl flex px-4 py-2 justify-center shadow-2xl overflow-hidden  '>
    <div className='animate-dudu  w-100 '> hi </div>
    </div>
   </div>
   <div className='flex items-center justify-center -mt-10 text-neutral-200'> <button className='rounded-lg px-4 py-2 bg-neutral-600 border-b-gray-50 flex items-center justify-center hover:bg-neutral-700 cursor-pointer
    transition duration-200' onClick={handleThemeChange}>click </button></div>
   </>
  )
}

export default Anime