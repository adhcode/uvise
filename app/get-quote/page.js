"use client"

import React from 'react'
import lottie from 'lottie-web'
import { createRef, useEffect } from 'react'
import Image from 'next/image'
import grp9 from '../../public/group9.png'
import grp10 from '../../public/group10.png'
import grp11 from '../../public/group11.png'

const page = () => {
  
const quoteAni = createRef();
  useEffect (() =>{
    const anim = lottie.loadAnimation({
      container: quoteAni.current,
      renderer:"svg",
      loop:true,
      path:"/quoteani.json"
     
    })
    return () => anim.destroy();
  }, [])


  return (
    <div className=' flex min-h-screen flex-col items-center justify-between p-24 '>


    <div className='flex flex-row justify-around space-x-[200px] sm:flex-col sm:justify-center sm:items-center
         '>
       <div className='w-[400px] h-[542px]  mt-[30px] sm:ml-4'>
        
        <h2 className='text-[#2A2A2A] text-[40px] text-[600] sm:text-[32px]'>Get a Quote, it all start here!</h2>
        <div className='w-[400px] h-[400px] sm:w-[350px] sm:h-[350px]' ref={quoteAni}> 

        
       </div>
       </div>
      <div className=' flex  w-[640px]'>
        <form action='' className='ml-[70px]'>
          <div className='flex  space-x-2 mt-[60px]  sm:flex-col sm:space-x-0 sm:space-y-4 '>
          <input type='text' placeholder='Name' className='w-[316px] bg-[#FAFAFA] p-2 rounded-[8px] '/>
           <input type='email' placeholder='Email' className='bg-[#FAFAFA] w-[316px] p-2 rounded-[8px] '/>
           </div>
           <div className='sm:flex sm:flex-col'>
           <textarea placeholder='Message' className='w-[640px] h-[200px] bg-[#FAFAFA] mt-2 p-2 rounded-[8px] resize-none mb-8 sm:w-[316px] '></textarea>
           <input type='text' placeholder='Type of service' className='w-[640px] bg-[#FAFAFA] p-2 rounded-[8px] mb-2 sm:w-[316px]'/>
           <input type='text' placeholder='Budget range' className='w-[640px] bg-[#FAFAFA] p-2 rounded-[8px] mb-2 sm:w-[316px]'/>
           <input type='text' placeholder='Relevant documents' className='w-[640px] bg-[#FAFAFA] p-2 rounded-[8px] mb-8 sm:w-[316px] '/>
           </div>
           <div className='flex flex-row-reverse'> 
           <input type='submit' value='Submit' className='w-[208px] h-[41px] bg-[#0443E2] text-[#FFF] rounded-[8px] '  />
           </div>
        </form>
      </div>
          </div>

           <div className='flex flex-row w-[1232px] mt-[40px] sm:flex-col  sm:w-[350px] sm:h-[1265px]  sm:justify-center sm:items-center'>
        <div className=' ml-[250px] '>
          <div className='w-[616px] space-y-4  '>
            <div className='w-[395px] sm:w-[320px] h-[196px] bg-[#9747FF33] bg-opacity-20 rounded-[8px]'>
               <div className='pt-[32px] pb-[32px] pl-[24px] pr-[224px] space-y-2 sm:pr-0 '>
                <p className='text-[16px] sm:text-[14px] text-[600] text-[#2A2A2A]'>Call Us</p>
                <Image 
            src={grp9}
            alt='data'
            width="64"
            height="64"
            priority="100"
            />
            <p className='text-[16px] sm:text-[14px] text-[600] text-[#2A2A2A]'> +234 000 000 0000</p>
            </div>

               </div>
               
               <div className='w-[395px] sm:w-[320px] h-[196px] bg-[#ECE53D] bg-opacity-20 rounded-[8px]'>
               <div className='pt-[32px] pb-[32px] pl-[24px] pr-[224px] space-y-2'>
                <p className='text-[16px] sm:text-[14px] text-[600] text-[#2A2A2A]'>Email Us</p>
                <Image 
            src={grp10}
            alt='data'
            width="64"
            height="64"
            priority
            />
            <p className='text-[16px] sm:text-[14px] text-[600] text-[#2A2A2A]'> contact@uvise.com</p>
            </div>

               </div>
               <div className='w-[395px] sm:w-[320px] h-[196px] bg-[#0443E2] bg-opacity-20 rounded-[8px]'>
               <div className='pt-[32px] pb-[32px] pl-[24px] pr-[224px] space-y-2'>
                <p className='text-[16px] sm:w-[200px] sm:text-[14px] text-[600] text-[#2A2A2A]'>Uvise 24/7 Support</p>
                <Image 
            src={grp11}
            alt='data'
            width="64"
            height="64"
            priority
            />
            <p className='text-[16px] sm:text-[14px] sm:w-[200px] text-[600] text-[#2A2A2A]'> Start a Conversation</p>
            </div>

               </div>
            </div>

          </div>
         
          </div>

           <div className='h-[595px] bg-white max-w-[1440px] mt-20 pt-12 sm:max-w-[480px] sm:h-[1062px] sm:flex sm:justify-center sm:flex-col sm:items-center sm:mt-5'>
          <div className='flex justify-center flex-col items-center mb-10'>
        <h3 className='text-[32px] font-[600] sm:text-[24px]'>Client Testimonial</h3>
        <p className='text-[14px] font-[400]'>What people are saying about us
</p>
</div>
<div className='flex  justify-around space-x-[-200px] sm:flex-col sm:space-x-0 sm:space-y-4'>
   <div className='w-[395px] bg-white h-[310px]   justify-around items-center rounded-[8px] border-blue border-[1px] sm:w-[350px] '>
    <div className='flex flex-row  justify-evenly mt-10 ml-[-100px] space-x-[-120px]'>
       <div className='w-[64px] h-[64px] rounded-full bg-[#D9D9D9]  '>
         
       </div>
       <div className=''>
        <h2 className='text-[24px]'>Wale Obalaja</h2>
       <p className='pt-2'>Company Name</p>
       </div>
       </div>
       <div className='pl-10 pr-10 mt-[24px]' >
       <p className=''>Technology is constantly evolving, and so are we. Our passion for innovation drives us to stay ahead of the curve, adopting the latest tools and techniques to give you a competitive edge.</p>
       </div>
       
       
       
       </div>
   
   <div className='w-[395px] bg-white h-[310px] justify-around items-center rounded-[8px] border-blue border-[1px]  sm:w-[350px]'>
    <div className='flex flex-row  justify-evenly mt-10 ml-[-100px] space-x-[-120px]'>
       <div className='w-[64px] h-[64px] rounded-full bg-[#D9D9D9]  '>
         
       </div>
       <div className=''>
        <h2 className='text-[24px]'>Wale Obalaja</h2>
       <p className='pt-2'>Company Name</p>
       </div>
       </div>
       <div className='pl-10 pr-10 mt-[24px]' >
       <p className=''>Technology is constantly evolving, and so are we. Our passion for innovation drives us to stay ahead of the curve, adopting the latest tools and techniques to give you a competitive edge.</p>
       </div>
       
       
       
       </div>
   <div className='w-[395px] bg-white h-[310px] justify-around items-center rounded-[8px] border-blue border-[1px] sm:w-[350px]'>
    <div className='flex flex-row justify-evenly mt-10 ml-[-100px] space-x-[-120px]'>
       <div className='w-[64px] h-[64px] rounded-full bg-[#D9D9D9]  '>
         
       </div>
       <div className=''>
        <h2 className='text-[24px]'>Wale Obalaja</h2>
       <p className='pt-2'>Company Name</p>
       </div>
       </div>
       <div className='pl-10 pr-10 mt-[24px]' >
       <p className=''>Technology is constantly evolving, and so are we. Our passion for innovation drives us to stay ahead of the curve, adopting the latest tools and techniques to give you a competitive edge.</p>
       </div>
       
       
       
       </div>
   </div>
        
   </div>  
    </div>
    
  )
}

export default page