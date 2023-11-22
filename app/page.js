"use client"

import { Nunito } from 'next/font/google'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import dataloss from '../public/custre.png'
import cybsec from '../public/bouncc.png'
import col from '../public/col.png'
import ep from '../public/ep.png'
import inv from '../public/inv.png'
import ts from '../public/ts.png'
import help from '../public/help.png'
import chart from '../public/chart.png'
import twitter from '../public/Twitter.png'
import instagram from '../public/Instagram.png'
import ceo from "../public/Ellipse1.png"
import cto from "../public/Ellipse2.png"
import proj from "../public/Ellipse3.png"


import lottie from 'lottie-web'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { createRef, useEffect } from 'react'
import Link from 'next/link'
import Featured from './components/featured/Featured'

const nunito = Nunito ({ subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  const animationContainer = createRef();
  useEffect (() =>{
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer:"svg",
      loop:true,
      path:"/homeani.json"
     
    })
    return () => anim.destroy();
  }, [])

  const animationAbout = createRef();
  useEffect (() =>{
    const anim = lottie.loadAnimation({
      container: animationAbout.current,
      renderer:"svg",
      loop:true,
      path:"/aboutus.json"
     
    })
    return () => anim.destroy();
  }, [])
  return (
    <main className="">
      <div className={nunito.className}>
      <div className=' bg-[#FFF] w-full flex justify-between items-center mx-auto lg:px-0  pt-32 sm:pt-24 pb-32  max-w-6xl sm:m-0 sm:flex-col'>
          <div className='h-auto'>
        <h2 className=" text-[#2A2A2A] text-[48px] font-[600]  leading-normal w-[435px] sm:w-[288px] sm:text-[32px] sm:h-[176px] sm:mb-2 overflow-x-visible">Unleashing <br/> <span className='text-blue inline'>Business</span> <span className='inline-flex'>Potential:</span>Your Tech <span className='text-blue inline'>Solutions</span> Architect! </h2>
        <p className='text-[24px] font-[400]  leading-normal text-[#666666] w-[527px] sm:w-[342px] sm:text-[15px] sm:mt-4 sm:mb-4'>Empowering Businesses With Innovative Tech Expertise and Tailored Solutions for Success</p>
        <div className={inter.className}>
        <div className='flex space-x-8 '>
          <button className="bg-white text-blue text-[14px] font-[600] leading-normal  hover:text-white border-[1px] w-[140px] h-[41px]  rounded-[8px]    border-white-500 hover:bg-blue mt-2 "><Link href='/get-quote'>Contact Us</Link>
          </button>
          <button className=" bg-blue text-white hover:bg-white text-[14px] font-[600] leading-normal hover:text-blue hover:border-blue border-[1px] w-[140px] h-[41px] rounded-[8px]  border-white-500 pr-[8px] pt-[4px] pl-[8px] pb-[4px]  mt-2 ">
            <Link href='/get-quote'>
            Get Quote</Link>
            </button>
          </div>
          </div>
        </div>
      <div className='w-[604px] h-[440px] rounded-full bg-[#C0D2FB]  mt-3 flex items-center justify-center mb-3 lg:w-[504px]  sm:h-[254px]  sm:w-[350px]  lg:h-[340px] sm:mt-8 sm:mb-[-120px]'>
      <div className='w-[500px] h-[499px] lg:w-[400px] lg:h-[399px] sm:w-[300px] sm:h-[300px]' ref={animationContainer}> 
      </div>
        </div>
        </div>

        </div>

        
        <div className= {nunito.className}>
          <div className=' flex flex-col  items-center justify-center bg-purple  mt-1  pb-20 sm:pb-0 h-[597px] sm:mt-[0px] sm:h-[1620px]  sm:justify-center sm:items-center'>
            <div className='mb-10 mt-10 sm:mt-0 '> 
          <h2 className='text-[#2A2A2A] text-[32px] font-[600] w-[170px] ml-12 items-center justify-center sm:text-[24px] sm:justify-center sm:pt-0'>Our Service</h2>
          <p className='text-[14px] font-[400]  leading-normal text-[#666666] w-[316px] sm:w-[213px] sm:text-center'>Service tailored to enhance your business growth</p>
          </div>
          <div className='flex  space-x-8 sm:flex  sm:flex-wrap sm:space-y-8 items-center justify-center  sm:space-x-0 '>
          <div className='bg-white w-[289px] mt-2 pl-[26px] pr-[25px] pt-[35px] pb-[34px] h-[342px] shadow rounded-[5px]'>
          <div className='bg-[#DC4BCD] rounded-[50%] w-[64px] h-[64px] flex items-center justify-center mt-2 p-2 '>
            <Image 
            src={dataloss}
            alt='data'
            width="24"
            height="24"
            priority
            />
            </div>
            <h2 className='mt-3 text-[#2A2A2A] text-[24px] font-[600] mb-1'>Customer Research</h2>
            <p className='text-[14px] font-[400]  leading-normal w-[238px] text-[#666666] '>At UVISE, we understand that the key to triumph lies in understanding your customers deeply. By gaining valuable insights into their wants and needs, we help you uncover untapped opportunities and pioneer groundbreaking products, services, and experiences.</p>
          </div>
           <div className='bg-white  mt-2  w-[289px] rounded-[5px] shadow pl-[26px] pr-[25px] pt-[35px] pb-[34px] h-[342px] items-center '>
          <div className='bg-[#0443E2] rounded-[50%] w-[64px] h-[64px] flex items-center justify-center mt-2 p-2'>
            <Image 
            src={help}
            alt='help'
            width="24"
            height="24"
            priority
            />
            </div>
            <h2 className='mt-3 text-[#2A2A2A] text-[24px] font-[600] mb-1'>Technical Support</h2>
            <p className='text-[14px] font-[400]  leading-normal text-[#666666] w-[238px]'>Our technical support services extend beyond resolving immediate problems we collaborate with you to design robust technology solutions that align with your business goals.</p>
          </div>
           <div className='bg-white mt-2  w-[289px] rounded-[5px] shadow pl-[26px] pr-[25px] pt-[35px] pb-[34px] h-[342px] '>
          <div className='bg-[#ECE53D] rounded-[50%] w-[64px] h-[64px] flex items-center justify-center mt-2 p-2'>
            <Image 
            src={cybsec}
            alt='cyber'
            width="24"
            height="24"
            priority
            />
            </div>
            <h2 className='mt-3 text-[#2A2A2A] text-[24px] font-[600] mb-1'>Cyber Security</h2>
            <p className='text-[14px] font-[400]  leading-normal text-[#666666] w-[238px]'>Safeguard your valuable assets and customer data with robust cybersecurity measures tailored to your specific industry.</p>
          </div>
           <div className='bg-white mt-2  w-[289px] rounded-[5px] shadow pl-[26px] pr-[25px] pt-[35px] pb-[34px] sm:pb-0 h-[342px]'>
          <div className='bg-[#CA4848] rounded-[50%] w-[64px] h-[64px] flex items-center justify-center mt-2 p-2 '>
            <Image 
            src={chart}
            alt='chart'
            width="24"
            height="24"
            priority
            />
            </div>
            <h2 className='mt-3 text-[#2A2A2A] text-[24px] font-[600] mb-1'>Data analytics</h2>
            <p className='text-[14px] font-[400]  leading-normal text-[#666666] w-[238px]'>Make informed business decisions with data-driven insights, predictive analytics, and actionable reports.</p>
          </div>
          </div>
          
          </div>
      <div className='h-[674px] bg-blue max-w-[1440px] sm:mt-8 sm:flex sm:flex-col  sm:h-[820px]  '>
        <div className='flex flex-row-reverse items-center justify-between sm:justify-center sm:items-center sm:flex-col'>
          <div className='pr-[133px] sm:pr-[30px] '>
          <h3 className='pl-20 text-[14px] mt-4 pt-2 text-white sm:pl-[20px] sm:mb-10'>About Us</h3>
          <h2 className='text-white pl-20 text-[24px] w-[420px] mt-4 leading-normal font-[600] sm:w-[320px] sm:pl-[20px]'>UVISE, your dedicated partner in solving complex business challenges with innovative technology. </h2>
          <p className='text-[#E1E1E1] text-[16px] pl-20 font-[400] mt-2 leading-normal w-[458px] sm:w-[360px] sm:pl-[20px] sm:mb-2'>Our mission is to empower businesses of all sizes to thrive in the digital landscape by providing tailored and transformative tech solutions. With a team of visionary experts and a passion for excellence, we are committed to driving your success forward.</p>
          <div className={inter.className}>
          <div className='pl-20 sm:pl-[20px] mb-2'>
            <button className=" bg-blue text-white text-[14px] font-[500] leading-normal  hover:text-blue border-[0.5px] w-[141px] h-[41px] rounded-[6px]    border-white pr-[8px] pt-[4px] pl-[8px] pb-[4px] hover:bg-white mt-2 "><Link href='/get-quote'>
            Learn more</Link>
          </button>
          </div>
          </div>
          </div>
          <div className='w-[604px] h-[604px] rounded-full bg-[#C0D2FB] ml-20 mt-3 flex items-center justify-center sm:w-[350px]  sm:h-[350px] sm:pl-[20px] sm:ml-0'>
          <div className='w-[500px] h-[500px] sm:w-[300px] sm:h-[300px]' ref={animationAbout} />

          </div>
        </div>
        </div>
        

        <div className='bg-white '>
        <div className='pl-20 pb-3 flex flex-col items-center mt-12 sm:items-start sm:pl-[20px] sm:mt-4 '>
          <h2 className='text-[#2A2A2A] text-[32px] font-[600] mt-3 sm:text-left sm:text-[24px]'>Why Choose Us</h2>
          <p className='mt-2 text-[#666666] text-[14px] w-[562px] text-center mb-4 sm:w-[348px] sm:text-left'>As a multifaceted digital solution agency, we produce beautifully crafted creative solutions that transcend business goals and garner recognition.</p>
        </div>
        <div className='flex justify-between pl-[105px] pr-[105px] sm:pr-0 sm:flex-col sm:pl-0'>
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
            <div className='flex space-x-4 sm:flex-col sm:items-start'>
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
          <h2 className='text-[#2A2A2A] w-[198px] h-[66px] text-[24px] font-[600] pl-1 sm:pl-6 sm:mb-0 '>Collaborative Partnership</h2>
          <p className=' text-[#666666] text-[14px] w-[238px] pr-2 h-[133px] sm:w-[238px] sm:pl-0'>We believe in the power of collaboration. Working hand in hand with your team, we foster an environment of open communication and idea-sharing to ensure we are always aligned with your objectives.</p>
          </div>
          </div>
          
        </div>
        </div>
        </div>



        <div className={nunito.className}>
        <div className='h-[595px] bg-purple max-w-[1440px] mt-20 sm:mt-4 pt-12 sm:pt-4 sm:h-[1200px] '>
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
       <h2 className='pt-2'>Olorode Dhikrullah</h2>
       <p className=''>CEO</p>
       </div>
       <div className='flex justify-around space-x-[-90px]'>

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
       <div className='flex justify-around space-x-[-90px]'>

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
       <div className='flex justify-around space-x-[-90px]'>

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
        
        

        <div className={nunito.className}>
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

  <Featured  / >
        
    </main>
  )
}