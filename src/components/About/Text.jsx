import React from 'react'
import {GiTechnoHeart} from "react-icons/gi"
import {FaPeopleCarry} from "react-icons/fa"
import Spots from './spots'
import {motion} from "framer-motion"

const Text = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.3,
          },
        },
      };
    
      const item = {
        hidden: { opacity: 0, x:30,  },
        show: { opacity: 1, x:0, transition:{type: 'spring'} },
    };
  return (
    <motion.div variants={container} viewport={{ once: true, amount: 0.5 }} initial="hidden" whileInView="show" className='text'>
        <motion.div variants={item} className='bg-gradient-to-r from-[#8f145d] to-[#bd4a4a] inline-block mb-6'>
          <p className='p-1'>More about me</p>
        </motion.div>
        <motion.h1 variants={item} className='text-3xl font-medium leading-10 mb-5'>DSA enthusiast & and can develop any website you<br className='lg:block hidden' /> <span className='pink-text-gradient'>Want</span></motion.h1>
        <motion.p variants={item} className='text-sm text-neutral-400'>I'am having good proficiency in problem solving on DSA, also i am full stack web developer and possess extensive knowledge of the latest technologies and frameworks</motion.p>
        <motion.div variants={item} className='grid grid-cols-2 gap-5 mt-10'>
          <div className='grid grid-cols-1 gap-2'>
            <div className="icon">
              <GiTechnoHeart size={24} className='text-pink-500'/>
            </div>
            <div>
              <h1>Modern Design</h1>
              <p className='text-[10px] text-neutral-400'>Worked on modern technologies like HTML,CSS,React.js,
              Next.js,Node.js,Express.js,TailwindCss,
              Firebse,Prisma,PostgreSQL</p>
            </div>
          </div>
          <div className='grid grid-cols-1 gap-2 '>
            <div className="icon">
              <FaPeopleCarry size={24} className='text-pink-500'/>
            </div>
            <div>
              <h1>Problem-solving</h1>
              <p className='text-[10px] text-neutral-400'>Proficient in problem-solving on DataStructures and Algorithms Done almost 400 questions of DSA</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
  )
}

export default Text