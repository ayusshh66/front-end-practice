import React, { useEffect, useState } from 'react'

function App() {

  const[count, setCount] = useState(10  );

  function hello(){

    console.log("hi")

    new Promise((resolve, reject) => {

      if(count >0){
      resolve(" yoooo")}
      
    })

    setTimeout(() => {
      console.log("bye")
    }, 0);

    console.log("bitch")

  }
  hello()
  
  return (

    <>
      <div className='max-w-3xl mx-auto flex justify-center items-center h-screen'>
        <div className=' mt-10'>
          <p className=' flex justify-center mb-9 text-4xl'>{count} </p>
          <div className='flex gap-10'>
            <button className='bg-black text-white px-4 py-2 rounded-lg w-40 cursor-pointer ' onClick={() => setCount((prev) => prev + 1)}>increase</button>
            <button className='bg-black text-white px-4 py-2 rounded-lg w-40 cursor-pointer' onClick={() => setCount((prev) => prev-1)} >decrease</button>
          </div>
        </div>
      </div>
    </>

  )
}

export default App