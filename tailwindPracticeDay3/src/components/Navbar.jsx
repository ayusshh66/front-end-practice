import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import { useState } from 'react'
function Navbar() {
    const [open,setOpen] = useState(false);
  const links = [{
    href : '/home',
    title : "home"

  },{
     href : '/about',
    title : "about"
  },{
     href : '/login',
    title : "LogIn"
  }];

  return (
    <>
        <div className=''>
        <div className='bg-gray-500 max-w-6xl mx-auto shadow-2xl rounded-full px-4 py-2 mt-4 text-white flex justify-between'>
            <div className="logo flex tracking-wider justify-center items-center px-4 py-2 " 
            ><span className='text-2xl text-red-300 selection:bg-amber-400 '>M</span>y</div>
            <div className=' hidden md:flex px-4 py2 justify-center items-center gap-4'>
                {links.map((links,index) => (
                    <NavLink to={links.href} key={index} >{links.title}</NavLink>
                ))}
                
                
                

            </div>
            <div className='leading-5 flex justify-center items-center'>
                    <button onClick={() => setOpen(!open)}
                    className=' md:hidden   cursor-pointer relative  bg-gray-700 rounded-lg px-2 '>=</button>
                
                </div>
                
            

        </div>
        <div className='md:hidden bg-gray-500 max-w-2xs 
                mx-auto shadow-2xl rounded-md px-4 py-2 mt-4 text-white flex justify-between flex-col items-center leading-6 '>
                    {open && links.map((links,index) => (
                    <NavLink to={links.href} key={index} >{links.title}</NavLink>
                ))}
                </div>
            
        </div>
    </>
  )
}

export default Navbar