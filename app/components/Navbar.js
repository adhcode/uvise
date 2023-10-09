'use client'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import logo from '../../public/logo1.png'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Inter } from 'next/font/google'
import { useState } from 'react'



const inter = Inter({ subsets: ['latin'] })


const Navbar = () => {

  const [nav , setNav] = useState(false)
  const changeNav = () => {
    setNav(!nav)

  }
  
  return (
    <nav className='fixed w-full bg-purple h-[80px] max-w-[1440px] lg:max-w-[976px] sm:max-w-[480px] flex justify-between  items-center mx-auto pr-[150px] pl-[120px] sm:pl-[35px] sm:pr-[80px] z-50'>
      {/*logo*/}
      <div className='sm:w-[120px] w-[180px]'>
           <Link href="/">
            <Image 
            src={logo}
            alt="UVISE logo"
            
            
            quality={100}
            
            priority= {true}
            />

           </Link>
           </div>

           {/*navigation*/}
           
            <div className= 'cursor-pointer flex justify-center items-center gap-x-[300px] sm:hidden '>
              {/*nav-link*/}
              <div className={inter.className}>
              <div className='flex  space-x-4 text-[14px] text-[#2A2A2A] '>
                <Link href='/' className=''>Home</Link>
                <Link href='/service'>Service</Link>
                <Link href='/about'>About Us</Link>
                <Link href='/blog'>Blog</Link>
                <Link href='/contact'>Contact</Link>
                </div>
                 </div>
             
              <div className={inter.className}>
             <button className="  bg-blue text-white hover:bg-purple hover:text-blue hover:border-blue border-[1px] w-[134px]  h-[41px] font-[600] text-[14px] rounded-[8px]  border-white-500  
               "><Link href='/get-quote'>
            Get Quote</Link></button>
               </div>
            
            </div>
           
           {/*mobile*/}
           <div className='sm:block xl:hidden z-50 text-blue' onClick={changeNav}>
            {nav ? <div className='border rounded-full absolute top-8 left-[300px] ease-in-out duration-200'> <AiOutlineClose size={20}/></div> : <div className='sm:pl-0'> <AiOutlineMenu size={20}/></div> }
           </div>
            <div className= {nav ? 'sm:block absolute top-0 left-0 flex justify-center items-center w-[338px] h-[400px] bg-white text-left ease-in duration-300 xl:hidden z-20' : 'sm:block absolute top-0 left-[-100%] flex justify-center items-center w-[338px] h-[400px] bg-white text-left ease-in duration-300 xl:hidden z-20 '}>
              {/*nav-link*/}
              <div className={inter.className}>
              <div className='flex flex-col  space-y-6 text-[14px] text-[#2A2A2A] mt-[50px] ml-4 '>
                <Link href='/' className=''>Home</Link>
                <Link href='/service'>Service</Link>
                <Link href='/about'>About Us</Link>
                <Link href='/blog'>Blog</Link>
                <Link href='/contact'>Contact</Link>
                <div className={inter.className}>
             <button className="  bg-blue text-white hover:bg-purple hover:text-blue hover:border-blue border-[1px] w-[134px]  h-[41px] font-[600] text-[14px] rounded-[8px]  border-white-500  
               "><Link href='/get-quote'>
            Get Quote</Link></button>
               </div>
                </div>
                 </div>
             
              
            
            </div>
           
              
               
                 
              
              

             
              
           

           
           
            
            
          </nav>
  )
}

export default Navbar