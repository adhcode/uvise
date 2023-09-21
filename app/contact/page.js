"use client"




import React from 'react'
import lottie from 'lottie-web'
import { createRef, useEffect } from 'react'
import Image from 'next/image'
import grp9 from '../../public/group9.png'
import grp10 from '../../public/group10.png'
import grp11 from '../../public/group11.png'







const page = () => {

  const contactAni = createRef();
  useEffect (() =>{
    const anim = lottie.loadAnimation({
      container: contactAni.current,
      renderer:"svg",
      loop:true,
      path:"/contact.json"
     
    })
      return () => anim.destroy();
  }, [])


  return (
     <main className="flex min-h-screen flex-col items-center justify-between p-24 sm:p-10 sm:w-[390px] sm:items-center sm:justify-center">

      <div className='flex flex-row justify-center items-center space-x-[180px] pr-[160px] pl-[120px] sm:flex-col sm:space-x-0 sm:pr-0 sm:pt-20 sm:pl-0'>

      <div className='w-[499px] sm:w-[350px]'>
        <h2 className='text-[40px] sm:text-[30px] sm:w-[350px]'>Talk to us. We’re always happy to make new connections</h2></div>


      <div className='w-[500px] h-[312px] bg-white  mt-3 flex items-center justify-center mb-3 sm:w-[350px] '>
      <div className='w-[500px] h-[499px] ' ref={contactAni}>
        </div>
        </div>
        </div>
        <div className='flex flex-row w-[1232px] mt-[40px] sm:flex-col  sm:w-[350px] sm:h-[1265px]  sm:justify-center sm:items-center'>
        <div className=' ml-[250px] '>
          <div className='w-[616px] space-y-4  '>
            <div className='w-[395px] h-[196px] bg-[#9747FF33] bg-opacity-20 rounded-[8px]'>
               <div className='pt-[32px] pb-[32px] pl-[24px] pr-[224px] space-y-2 sm:pr-0 '>
                <p className='text-[16px] text-[600] text-[#2A2A2A]'>Call Us</p>
                <Image 
            src={grp9}
            alt='data'
            width="64"
            height="64"
            priority="100"
            />
            <p className='text-[16px] text-[600] text-[#2A2A2A]'> +234 000 000 0000</p>
            </div>

               </div>
               
               <div className='w-[395px] h-[196px] bg-[#ECE53D] bg-opacity-20 rounded-[8px]'>
               <div className='pt-[32px] pb-[32px] pl-[24px] pr-[224px] space-y-2'>
                <p className='text-[16px] text-[600] text-[#2A2A2A]'>Email Us</p>
                <Image 
            src={grp10}
            alt='data'
            width="64"
            height="64"
            priority
            />
            <p className='text-[16px] text-[600] text-[#2A2A2A]'> contact@uvise.com</p>
            </div>

               </div>
               <div className='w-[395px] h-[196px] bg-[#0443E2] bg-opacity-20 rounded-[8px]'>
               <div className='pt-[32px] pb-[32px] pl-[24px] pr-[224px] space-y-2'>
                <p className='text-[16px] text-[600] text-[#2A2A2A]'>Uvise 24/7 Support</p>
                <Image 
            src={grp11}
            alt='data'
            width="64"
            height="64"
            priority
            />
            <p className='text-[16px] text-[600] text-[#2A2A2A]'> +234 000 000 0000</p>
            </div>

               </div>
            </div>

          </div>
          <div className='w-[644px] h-[489px]
          mt-20 sm:w-[480px]'>
       <div className='text-center sm:ml-[30px] '>
        <p className='text-[#666] text-[16px] text-[400]'>Let's talk</p>
        <h2 className='text-[#2A2A2A] text-[40px] text-[600] sm:text-[24px]'>Get in touch</h2>
        <p className='text-[#666] text-[16px] text-[400] sm:text-[14px] sm:w-[311px] sm:ml-[70px]'>Have a question, a project? We'd love to discuss...</p>
       </div>
      <div>
        <form action='' className='sm:flex sm:flex-col sm:justify-center sm:items-center sm:ml-[30px]'>
          <div className='flex flex-row space-x-2 mt-[32px] sm:flex-col sm:space-x-0'>
          <input type='text' placeholder='Name' className='w-[316px] bg-[#FAFAFA] p-2 rounded-[8px] sm:mb-4 '/>
           <input type='email' placeholder='Email' className='bg-[#FAFAFA] w-[316px] p-2 rounded-[8px] sm:mb-2 '/>
           </div>
           <textarea placeholder='Message' className='w-[640px] h-[200px] bg-[#FAFAFA] mt-2 p-2 rounded-[8px] resize-none mb-8 sm:w-[316px] '></textarea>
           <div className='sm:text-left sm:ml-[-100px]'> 
           <input type='submit' value='Submit' className='w-[208px] h-[41px] bg-[#0443E2] text-[#FFF] rounded-[8px] '  />
           </div>
        </form>
      </div>
          </div>
          </div>
       
        
    </main>
  )
}

export default page