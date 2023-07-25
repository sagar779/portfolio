import AnimatedText from '@/component/AnimatedText'
import React, { useEffect, useRef } from 'react'
import Head from 'next/head'
import Layout from '@/component/Layout'
import profilePic from "../../public/images/profile/developer-pic-2.jpg";
import Image from 'next/image';
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/component/Skills';
import Experience from '@/component/Experience';
import Education from '@/component/Education';

const AnimationNumbers = ({ value }) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {duration: 3000})
    const isInView = useInView(ref, {once:true});

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }

    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }, [springValue, value])

    return <span ref={ref}></span>
}


const About = () => {
    return (
        <>
            <Head>
                <title> Sagar | About Page</title>
                <meta name='description' content='any description' />
            </Head>
            <main className='flex w-full felx-col item-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text="Passion Fules Purpose!" className='mb-16' />
                    <div className='grid w-full grid-cols-8 gap-16'>
                        <div className='col-span-3 flex flex-col items-start justify-center'>
                            <h2 className='mb-4 text-lg font-bold uppercas text-dark/75 dark:text-light/75'>Biography</h2>
                            <p className='font-medium'>
                                Hi, I'm Sagar, a web developer and UI/UX designer with a passion for creating beautiful, functional,
                                and user-centered digital experiences. With 1 years of experience in the field. I am always looking for
                                new and innovative ways to bring my clients' visions to life.
                            </p>
                            <p className='my-4 font-medium'>
                                I believe that design is about more than just making things look pretty  it's about solving problems and
                                creating intuitive, enjoyable experiences for users.
                            </p>
                            <p className='my-2 font-medium'>
                                Whether I'm working on a website, mobile app, or
                                other digital product, I bring my commitment to design excellence and user-centered thinking to
                                every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
                            </p>
                        </div>

                        <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
              bg-light p-8 dark:bg-dark dark:border-light
            '>
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
                            <Image src={profilePic} alt="CodeBucks" className='w-full h-auto rounded-2xl' />
                        </div>

                        <div className='col-span-2 flex flex-col item-end justify-between'>

                            <div className='flex flex-col items-end justify-center'>
                                <span className='inline-block text-7xl font-bold'>
                                    <AnimationNumbers value={2} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75'>satisfied clients</h2>
                            </div>
                            <div className='flex flex-col items-end justify-center'>
                                <span className='inline-block text-7xl font-bold'>
                                    <AnimationNumbers value={10} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75'>project completed</h2>
                            </div>

                            <div className='flex flex-col items-end justify-center'>
                                <span className='inline-block text-7xl font-bold'>
                                    <AnimationNumbers value={1} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75'>years of experiance</h2>
                            </div>


                        </div>


                    </div>
                    <Skills/>
                    <Experience/>
                    <Education/>
                </Layout>

            </main>
        </>
    )
}

export default About
