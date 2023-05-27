import React from 'react'
import Layout from './Layout'
import Link from 'next/link'


const Footer = () => {
    return (
        <footer className='w-full border-t-2 border-solid border-dark
   font-medium text-lg dark:text-light dark:border-light
   '>
            <Layout className='py-8 flex item-center justify-between'>
                <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
                <div className='flex item-center'>
                    Build with<span className='text-primary dark:text-primaryDark text-2xl px-1'>&#9825;</span>
                    by&nbsp;<Link href="/" className='underline underline-offset-2' target={"_blank"}>Sagar</Link>
                </div>
                <Link href="/" className='underline underline-offset-2' target={"_blank"}>Say hello</Link>
            </Layout>
        </footer>
    )
}

export default Footer
