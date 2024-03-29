import React, { useRef } from 'react'
import { motion, useScroll } from "framer-motion"
import LiIcons from './LiIcons'

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null);
    return (
        <li  ref={ref} className='my-8 first:mt-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
            <LiIcons reference={ref}/>

            <motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration:0.5,type:"spring"}}

            
            >
                <h3 className='capitalize font-bold text-2xl'>{position}&nbsp; <a href={companyLink}
                    target='_blank'
                    className='text-primary dark:text-primaryDark'
                >@{company}</a></h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75'>
                    {time}|{address}
                </span>
                <p className='font-medium w-full'>
                    {work}
                </p>
            </motion.div>
        </li>
    );
}

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center'>Experience</h2>
            <div ref={ref} className='w-[75%] mx-auto relative'>
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light' />


                <ul className="w-full flex flex-col item-start justify-between ml-4">
                    <Details

                        position="Intern" company="Doon Public School"
                        companyLink="www.google.com"
                        time="2021-2021" address="Dehradun, Uttarakhand,India"
                        work="Worked on a school website for 4 weeks where I reconstruct the simple 
                        html ans css website to completely modern website with MEARN methodlogy.
                        "

                    />

                </ul>
            </div>
        </div>
    )
}

export default Experience
