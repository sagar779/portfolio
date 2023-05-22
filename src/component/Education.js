import React, { useRef } from 'react'
import { motion, useScroll } from "framer-motion"
import LiIcons from './LiIcons'

const Details = ({ type,time,place,info,score }) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className='my-8 first:mt-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
            <LiIcons reference={ref}/>

            <motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration:0.5,type:"spring"}}

            
            >
                <h3 className='capitalize font-bold text-2xl'>
                    {type}
                </h3>
                <span className='capitalize font-medium text-dark/75'>
                    {time} | {place}
                </span>
                <p className='font-medium w-full'>
                    {info} | {score}
                </p>
            </motion.div>
        </li>
    );
}

const Education = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center'>Education</h2>
            <div ref={ref} className='w-[75%] mx-auto relative'>
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top' />


                <ul className="w-full flex flex-col item-start justify-between ml-4">
                    <Details
                        type="Bachelor Of Science In Computer Science and Engineering" 
                        time="2020-2024 "
                        place="Graphic Era Hill University (GEHU)"
                       info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
                       Intelligence."
                       score="  7.77 GPA-Present " 
                    />

                    <Details
                        type="High School" 
                        time="2019-2020 "
                        place="Sangam Childrens Academy "
                       info="Relevant courses included Physics Chemistry Mathamatics" 
                       score="  77.2% "
                    />

                    <Details
                        type="Intermediate" 
                        time="2017-2018"
                        place="Sangam Childrens Academy "
                       info="Relevant courses included Physics Chemistry Mathamatics English History" 
                       score="75.6%"
                    />
                </ul>
            </div>
        </div>
    )
}

export default Education
