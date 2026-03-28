import React from 'react'


function Child() {
  return (
    <>
    <div className='bg-neutral-100 w-full min-h-100 rounded-2xl bg-[radial-gradient(var(--color-neutral-200)_1px,transparent_1px)]
  [background-size:10px_10px] flex justify-center items-center p-8 group relative'>
    <div className='absolute -mt-90  selection:bg-neutral-400 bg-clip-text text-transparent font-bold text-2xl  bg-gradient-to-r from-pink-300 via-blue-700 to-red-400 '>HEYY THIS IS WHAT I MADE</div>
    <div className='size-60 bg-neutral-100 rounded-lg bg-[radial-gradient(var(--color-neutral-200)_1px,transparent_1px)]
  [background-size:10px_10px] shadow-2xl relative perspective-distant '>
    {/* <div></div> */}

    <img src="/akku.jpg" alt="monkey"
    className='size-full object-cover object-center transform rotate-x-30 rotate-y-30 rotate-z-20 translate-z-20 rounded-2xl
    group-hover:rotate-x-0  group-hover:rotate-y-0  group-hover:rotate-z-0 ease-in-out duration-500' />

    </div>
  </div>
  {/* <div className='self-auto'>hi</div> */}
  </>
  )
}

export default Child;
