import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { IoClose } from 'react-icons/io5'

function Content() {
  const [pull, setPull] = useState(false)

  return (
    <div className='flex justify-center items-center h-screen bg-neutral-900'>

      
      <motion.button
        onClick={() => setPull(true)}
        whileHover={{
          scale: 1.08,
          rotateX: 10,
          rotateY: 10,
        }}
        whileTap={{
          scale: 0.95,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
        }}
        className='
          bg-gradient-to-r
          from-neutral-700
          to-neutral-600
          px-8
          py-4
          rounded-2xl
          text-xl
          text-white
          font-semibold
          cursor-pointer
          shadow-lg
          hover:shadow-neutral-700/50
        '
      >
        Open Card
      </motion.button>

      
      <AnimatePresence>
        {pull && (
          <motion.div
            className='fixed inset-0 flex justify-center items-center bg-black/50 backdrop-blur-sm z-50'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

           
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
                y: 50,
                filter: 'blur(10px)',
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
                filter: 'blur(0px)',
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
                y: 50,
                filter: 'blur(10px)',
              }}
              transition={{
                duration: 0.35,
                ease: 'easeInOut',
              }}
              className='
                relative
                w-[90%]
                max-w-2xl
                bg-neutral-800
                text-white
                rounded-3xl
                p-8
                shadow-2xl
              '
            >

             
              <motion.button
                onClick={() => setPull(false)}
                whileHover={{ rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className='
                  absolute
                  top-4
                  right-4
                  text-3xl
                  text-neutral-400
                  hover:text-white
                  cursor-pointer
                '
              >
                <IoClose />
              </motion.button>

              <motion.h2
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className='text-3xl font-bold mb-4'
              >
                Animated Modal
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className='text-neutral-300 leading-7'
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum facere consectetur quo magnam perferendis
                molestiae accusantium illum, itaque quam cum facilis fugit
                laborum quod obcaecati beatae enim ullam nobis.
              </motion.p>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}

export default Content