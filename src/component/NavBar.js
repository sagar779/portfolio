import React from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
import { TwitterIcon, DribbbleIcon, GithubIcon, LinkedInIcon, PinterestIcon, SunIcon, MoonIcon } from './Icons'
import Link from 'next/link'
import { motion } from "framer-motion";
import useTheamSwitcher from './hooks/useTheamSwitcher'

const CoustemLink = ({ href, title, className = '' }) => {
    const router = useRouter();
    console.log(router)

    return (
        <Link href={href} className={`${className} relative group`}>
            {title}

            <span className={`h-[1px] inline-block  bg-dark
          absolute left-0 -bottom-0.5 
          group-hover:w-full translate-[width] ease-duration-300
          ${router.asPath === href ? 'w-full' : 'w-0'}
         `}>&nbsp;</span>
        </Link>
    )
}

const NavBar = () => {

    const  [mode,setMode] = useTheamSwitcher();
    return (
        <header
            className='w-full px-32 py-8 font-medium flex items-center justify-between'
        >
            <nav>
                <CoustemLink href="/" title="Home" className='mr-4' />
                <CoustemLink href="/about" title="About" className='mx-4' />
                <CoustemLink href="/projects" title="Projects" className='mx-4' />
                <CoustemLink href="/articals" title="Articals" className='ml-4' />
            </nav>

            <nav className="flex items-center justify-center flex-wrap">
                <motion.a href="https://twitter.com" target={'_blank'}
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-6 mr-3"
                >
                    <TwitterIcon />
                </motion.a>

                <motion.a href="https://twitter.com" target={'_blank'}
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-6 mx-3"
                >
                    <GithubIcon />
                </motion.a>
                <motion.a href="https://twitter.com" target={'_blank'}
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-6 mx-3"
                >
                    <LinkedInIcon />
                </motion.a>
                <motion.a href="https://twitter.com" target={'_blank'}
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-6 mx-3"
                >
                    <PinterestIcon />
                </motion.a>
                <motion.a href="https://twitter.com" target={'_blank'}
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-6 ml-3"
                >
                    <DribbbleIcon />
                </motion.a>

                <button
               onClick={() => setMode(mode === "light" ? "dark" : "light")} 
               className='ml-3 flex item-center justify-center rounded-full p-1'
                >
                {
                    mode==="dark" ?
                    <SunIcon className={"fill-dark"}/>
                    : <MoonIcon className={"fill-dark"}/>
                }
                </button>

            </nav>

            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo />
            </div>
        </header>
    )
}

export default NavBar
