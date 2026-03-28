import React from 'react'

function Form() {
  return (
    <form className='size-full bg-neutral-200 '>
        <h1 className='text-4xl font-medium bg-gradient-to-b from-neutral-800  to-neutral-700 bg-clip-text text-transparent
         min-h-20  '>hey this is some crazy shit</h1>
         <div className='flex flex-col justify-center items-center  '>
            <label >Email-</label>
            <input type="email"  className='  focus:border-none focus:outline-none focus:ring-none invalid:border-red-600 bg-white max-w-sm my-8 px-4 py-2 rounded-lg hover:ring-2 focus:ring-4' placeholder='enter email'/>
            <button className='bg-black text-white px-4 py-2 rounded-lg hover:translate-y-0.5 flex justify-center items-center cursor-pointer
           text-shadow-xs text-shadow-white shadow-md shadow-black active:scale-95 transition-all duration-200 w-50'>submit</button>
            </div>

         
    </form>
  )
}

export default Form