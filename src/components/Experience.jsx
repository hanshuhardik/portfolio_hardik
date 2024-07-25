import React from 'react'
import { LANGUAGE } from '../constants'
import {motion} from "framer-motion";
const Experience = () => {
  return (
    <div className="border-b border-neutral-900 my-20 pd-4">
        <motion.h1
        whileInView={{opacity:1,y:0}}
        initial={{y:-100,opacity:0}}
        transition={{duration:2.5}}
        className="my-200 text-center pb-5 text-4xl">Language Knowns</motion.h1>
        <div>
            {LANGUAGE.map((lang,index)=>(
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <motion.div
                    whileInView={{opacity:1,x:0}}
                    initial={{x:-100,opacity:0}}
                    transition={{duration:1.5}}
                    className="w-full lg:w-1/4">
                    <img src={lang.image} width={150} height={50} alt={lang.name} className='rounded mb-6 height-50'/>
                    </motion.div>
                    <motion.div
                    whileInView={{opacity:1,x:0}}
                    initial={{opacity:0,x:100}}
                    transition={{duration:1.5}}
                    className="w-full max-w-xl lg:w3/4">
                    <h6 className="mb-2 rounded bg-neutral-900 text-purple-800 text-1xl text-center font-semibold">{lang.name}</h6>
                    <p className='mb-4 text-neutral-400'>{lang.description}</p>
                    
                    </motion.div>
                    </div>
            ))}
        </div>
        </div>
  )
}

export default Experience