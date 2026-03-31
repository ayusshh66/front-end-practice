import React, { useState } from 'react'
import {motion} from 'motion/react'; 

function Content() {
    const [pull, setPull] = useState(false)
    console.log(pull)
  return (
    <div className='    justify-center items-center h-screen'>
        <div  className=''>





            <motion.button 
            onClick={() => setPull((prev) => !prev)}
            whileHover={{
                rotateX : 20,
                rotateY :20,
            }}
            



            className='bg-neutral-600 w-30 h-15 rounded-xl text-2xl text-white cursor-pointer group active:scale-95  '>
                Button  
            </motion.button>

                {pull>0 &&  <div className=' flex justify-center items-center '>
                <motion.div 
                initial= {{
                    opacity : 0,
                    scale : 0.98,
                    filter : "blur(10px)"
                }}
                whileHover={{
                    opacity : 1,
                    scale : 1.05,
                    filter : "blur(0px)"
                }}
                transition={{
                    duration : 0.5,
                    ease : "easeInOut"
                }}
                
                
                className=' size-90 bg-neutral-300 mt-40 '>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum facere consectetur quo magnam perferendis molestiae accusantium illum, itaque quam cum facilis fugit laborum quod obcaecati beatae enim ullam nobis! Quod?
                    Repellendus, quisquam aliquam. Labore accusamus error itaque soluta cupiditate minima pariatur eos veniam possimus sint natus velit at omnis commodi a doloribus ipsam non architecto dicta, eius laboriosam. Iure, rerum?
                    Quam ipsa iure voluptas eius eum quia, a dignissimos odio molestias, voluptatem doloremque magni facilis ab laborum placeat quae asperiores nam odit, incidunt distinctio repudiandae? Minima optio provident dolore mollitia.</div>
                </motion.div>
            </div>  }
            
        </div>
    </div>

)}

export default Content