import React from 'react'
import Link from 'next/link'
import { Nunito } from 'next/font/google'
import { Inter } from 'next/font/google'
import Image from 'next/image'

import dataloss from '../../public/custre.png'
import cybsec from '../../public/bouncc.png'
import col from '../../public/col.png'
import ep from '../../public/ep.png'
import inv from '../../public/inv.png'
import ts from '../../public/ts.png'
import help from '../../public/help.png'
import chart from '../../public/chart.png'
import ceo from "../../public/Ellipse1.png"
import cto from "../../public/Ellipse2.png"
import proj from "../../public/Ellipse3.png"
import dat from "../../public/Ellipse4.png"
import doy from "../../public/Ellipse5.png"
import sam from "../../public/Ellipse6.png"
import white from "../../public/Ellipse7.png"


import abt1 from '../../public/about1.png'
import abt2 from '../../public/about2.png'
import twitter from '../../public/Twitter.png'
import instagram from '../../public/Instagram.png'

const nunito = Nunito ({ subsets: ['latin'] })

const inter = Inter({ subsets: ['latin'] })



const page = () => {
  return (
     <main className="flex min-h-screen flex-col items-center max-w-[1440px] sm:max-w-[390px] p-24 sm:p-10 ">
      <div className='p-20 text-center bg-[#FFF] sm:text-left'>
        <h2 className='text-[40px] text-[#2E2E2E] font-[600] mb-5 sm:w-[355px] sm:text-[32px]'>The Disruptive Difference</h2>
        <p className='text-[16px] font-[400] text-[#666] mb-[-50px] sm:w-[299px]'>Your business problems demand to be seen through an entirely new lens.
Together, let's take your business to into a transformational growth.</p>


</div>
 <div className={inter.className}>
        <div className='flex space-x-8 justify-center  sm:space-x-6 sm:items-center sm:justify-center'>
          <button className=" bg-white text-blue text-[14px] font-[600] leading-normal  hover:text-white border-[1px] w-[140px] h-[41px]  rounded-[8px] border-white-500 hover:bg-blue mt-4 "><Link href='/contact'>
            Contact Us</Link>
          </button>
          <button className=" bg-blue text-white hover:bg-white text-[14px] font-[600] leading-normal hover:text-blue hover:border-blue border-[1px] w-[140px] h-[41px] rounded-[8px]  border-white-500  mt-4 "><Link href='/get-quote'>
            Get Quote</Link></button>
          </div>
         
</div>
<div className='h-[794px] bg-[#0443E2] w-[1440px] pl-[104px] pr-[98px] pt-[72px] mt-20 sm:w-[390px] sm:h-[1248px] sm:mt-6 sm:pl-0 sm:pt-6'>
  <div className='flex flex-row mb-20 space-x-12 sm:flex-col sm:mb-0 sm:space-x-0 '>
<div className='w-[573px] pt-8 sm:pt-0'>
  <h2 className='text-[40px] text-white mb-6 sm:text-[24px] sm:text-[600] sm:ml-4'>Our Mision</h2>
  <p className='text-[#E1E1E1] text-[16px] sm:w-[350px] sm:ml-4 sm:mb-4'>UVISE, your dedicated partner in solving complex business challenges with innovative technology. Our mission is to empower businesses of all sizes to thrive in the digital landscape by providing tailored and transformative tech solutions. With a team of visionary experts and a passion for excellence, we are committed to driving your success forward.</p>
  </div>
  <div className='sm:pl-4'>
  <Image className='w-[604px] h-[289px] sm:max-w-[350px]'
            src={abt1}
            alt='data'
          
            
            priority
            />
            </div>
            </div>

             <div className='flex flex-row space-x-12 sm:flex-wrap-reverse sm:space-x-0'>

              <div className='sm:pl-4'>
  <Image className='w-[604px] h-[289px] sm:max-w-[350px]'
            src={abt2}
            alt='data'
           
            
            priority
            />
            </div>
<div className='w-[573px] pt-8 sm:pt-0'>
  <h2 className='text-[40px] text-white mb-6 sm:text-[24px] sm:text-[600] sm:ml-4 sm:mt-4'>Our Vision</h2>
  <p className='text-[#E1E1E1] text-[16px] sm:w-[350px] sm:ml-4 sm:mb-4'>At UVISE, we a shared vision to bridge the gap between technology and business. We set out on a mission to revolutionize the industry by delivering exceptional IT services that deliver real value. Our dedication to client success and relentless pursuit of excellence have earned us a reputation as a trusted technology solutions architect.</p>
  </div>
  
            </div>
            

</div>
    <div className={nunito.className}>
    <div className='h-[595px] bg-purple w-[1440px] mt-20 pt-12 sm:h-[1200px] sm:w-[390px]'>
          <div className='flex justify-center flex-col items-center mb-10'>
        <h3 className='text-[32px] font-[600] sm:w-[187px] sm:text-center sm:text-[24px]'>Meet the Minds behind Uvise</h3>
        <p className='text-[14px] font-[400] sm:w-[255px] sm:text-center'>Meet the Team that is Revolutionizing the Business World
</p>
</div>
<div className='flex  flex-row justify-around space-x-[-200px] sm:space-x-0 sm:flex-col sm:space-y-4 sm:items-center sm:justify-center '>
   <div className='w-[395px] sm:w-[350px] bg-white h-[307px] flex flex-col justify-around items-center  rounded-[8px] shadow  '>
       <div className='w-[120px] h-[120px] rounded-full bg-[#D9D9D9] mt-10'>
         <Image 
            src={ceo}
            alt='cyber'
            width="120"
            height="120"
            priority
            
            />
       </div>
       <div className='flex flex-col items-center '>
       <h2 className='pt-2'>Dhikrullah Adekunle</h2>
       <p className=''>CEO</p>
       </div>
       <div className='flex justify-around space-x-[-70px]'>

        <a href='https://msng.link/o?adekunledh=ig'>
         <Image 
            src={twitter}
            alt='cyber'
            width="24"
            height="24"
            priority
            
            />
            </a>
            <a href='https://msng.link/o?adekunledh=ig'>
         <Image 
            src={instagram}
            alt='cyber'
            width="24"
            height="24"
            priority
            
            />
            </a>
            </div>
       
       </div>
   
   <div className='w-[395px] bg-white h-[307px] flex flex-col justify-around items-center   rounded-[8px] shadow sm:w-[350px]'>
     <div className='w-[120px] h-[120px] rounded-full bg-[#D9D9D9] mt-10'>
          <Image 
            src={cto}
            alt='cyber'
            width="120"
            height="120"
            priority
            
            />
       </div>
       <div className='flex flex-col items-center '>
       <h2 className='pt-2'>Ayobami Daniel</h2>
       <p className=''>CTO</p>
       </div>
       <div className='flex justify-around space-x-[-70px]'>

        <a href='https://msng.link/o?adekunledh=ig'>
         <Image 
            src={twitter}
            alt='cyber'
            width="24"
            height="24"
            priority
            
            />
            </a>
            <a href='https://msng.link/o?adekunledh=ig'>
         <Image 
            src={instagram}
            alt='cyber'
            width="24"
            height="24"
            priority
            
            />
            </a>
            </div>
   </div>
   <div className='w-[395px] bg-white h-[307px] flex flex-col justify-around items-center  rounded-[8px] shadow sm:w-[350px]'>
     <div className='w-[120px] h-[120px] rounded-full bg-[#D9D9D9] mt-10'>
          <Image 
            src={proj}
            alt='cyber'
            width="120"
            height="120"
            priority
            
            />
       </div>
       <div className='flex flex-col items-center '>
       <h2 className='pt-2'>Rokeeb Abdul</h2>
       <p className=''>Product Designer</p>
       </div>
       <div className='flex justify-around space-x-[-70px]'>

        <a href='https://msng.link/o?adekunledh=ig'>
         <Image 
            src={twitter}
            alt='cyber'
            width="24"
            height="24"
            priority
            
            />
            </a>
            <a href='https://msng.link/o?adekunledh=ig'>
         <Image 
            src={instagram}
            alt='cyber'
            width="24"
            height="24"
            priority
            
            />
            </a>
            </div>
   </div>
   </div>
        
   </div>   
  
       
      
   </div>
   

   <div className='bg-white sm:max-w-[390px]'>
        <div className='pl-20 pb-3 flex flex-col items-center mt-12 sm:items-start sm:pl-[20px] sm:mt-4 '>
          <h2 className='text-[#2A2A2A] text-[32px] font-[600] mt-3 sm:text-left sm:text-[24px]'>Why Choose Us</h2>
          <p className='mt-2 text-[#666666] text-[14px] w-[562px] text-center mb-4 sm:w-[348px] sm:text-left'>As a multifaceted digital solution agency, we produce beautifully crafted creative solutions that transcend business goals and garner recognition.</p>
        </div>
        <div className='flex justify-between space-x-4 pl-[105px] pr-[105px] sm:flex-col sm:pl-0'>
        <div className=' flex top-0 space-x-1 bg-purple w-[604px] h-[249px] pt-[35px]  sm:w-[390px] sm:h-[249px] sm:mb-4'>
          <div className='w-[64px] h-[64px] bg-[#0443E2] rounded-full flex items-center justify-center ml-8 sm:ml-6'>
            <Image 
            src={ep}
            alt='inv'
            width="24"
            height="24"
            priority
            />
            </div>
            <div className='flex space-x-4 sm:flex-col sm:items-start  '>
          <h2 className='text-[#2A2A2A] text-[24px] font-[600] pl-3 sm:text-left sm:pl-6 sm:mb-4'>Expert Team</h2>
          <p className=' text-[#666666] text-[14px] w-[297px] pl-3 h-[114px] sm:w-[265px] sm:pl-2'>Our team of tech enthusiasts comprises skilled engineers, developers, designers, and analysts, each bringing a unique perspective to the table. Together, we form a powerhouse of talent, always ready to tackle challenges head-on and craft innovative solutions.</p>
          </div>
          
        </div>
        <div className='flex w-[604px] h-[249px] bg-purple pt-[35px] sm:w-[390px] sm:h-[249px] sm:mb-4 top-0 space-x-1  '>
          <div className='w-[64px] h-[64px] bg-[#ECE53D] rounded-full flex items-center justify-center ml-8 sm:ml-6' >
            <Image 
            src={ts}
            alt='inv'
            width="24"
            height="24"
            priority
            />
            
            </div>
            <div className='flex space-x-4 sm:flex-col sm:items-start '>
          <h2 className='text-[#2A2A2A] w-[220px] h-[33px] text-[24px] font-[600] pl-1 sm:text-left sm:pl-6 sm:w-[298px] sm:mb-4 '>Tailored Solutions</h2>
          <p className=' text-[#666666] text-[14px] w-[238px] pr-2 h-[133px] sm:w-[262px] sm:mt-2 sm:pl-2' >We understand that every business is different, and cookie-cutter solutions don't cut it. That's why we take the time to understand your specific needs and goals, ensuring that our solutions align perfectly with your vision.</p>
          </div>
          
        </div>
        </div>
        <div className='flex justify-between pl-[105px] pr-[105px] mt-5 sm:flex-col sm:pl-0 '>
        <div className='flex w-[604px] h-[249px] bg-purple pt-[35px]  sm:w-[390px] top-0 space-x-1  sm:mb-4'>
          <div className='w-[64px] h-[64px] bg-[#DC4BCD] rounded-full flex items-center justify-center ml-8'>
            <Image 
            src={inv}
            alt='inv'
            width="24"
            height="24"
            priority
            />
            </div>
            <div className='flex space-x-6 sm:flex-col sm:items-start' >
          <h2 className='text-[#2A2A2A] w-[150px] h-[66px] text-[24px] font-[600] pl-1 sm:pl-6 sm:w-[190px] sm:mb-4 '>Innovation at Heart</h2>
          <p className='text-[#666666] text-[14px] w-[238px] pr-2 pl-3 h-[133px] sm:w-[249px] sm:pl-0'>Technology is constantly evolving, and so are we. Our passion for innovation drives us to stay ahead of the curve, adopting the latest tools and techniques to give you a competitive edge.</p>
          </div>
          
        </div>
        <div className='flex w-[604px] h-[249px] bg-purple pt-[35px] top-0 space-x-1 sm:w-[390px] sm:h-[249px] sm:mb-4'>
          <div className='w-[64px] h-[64px] bg-[#CA4848] rounded-full flex items-center justify-center ml-8'>
            <Image 
            src={inv}
            alt='inv'
            width="24"
            height="24"
            priority
            />
            </div>
            <div className='flex space-x-6 sm:flex-col sm:items-start'>
          <h2 className='text-[#2A2A2A] w-[198px] h-[66px] text-[24px] font-[600] pl-1 sm:pl-6 sm:mb-4 '>Collaborative Partnership</h2>
          <p className=' text-[#666666] text-[14px] w-[238px] pr-2 h-[133px] sm:w-[268px] sm:pl-0'>We believe in the power of collaboration. Working hand in hand with your team, we foster an environment of open communication and idea-sharing to ensure we are always aligned with your objectives.</p>
          </div>
          </div>
          
        </div>
        </div>
</main>

  )
}

export default page