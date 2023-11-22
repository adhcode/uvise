import React from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import dataloss from '../../public/custre.png'
import cybsec from '../../public/bouncc.png'
import col from '../../public/col.png'
import ep from '../../public/ep.png'
import inv from '../../public/inv.png'
import ts from '../../public/ts.png'
import help from '../../public/help.png'
import chart from '../../public/chart.png'
import Featured from '../components/featured/Featured'



const inter = Inter({ subsets: ['latin'] })

const page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center w-full p-24 sm:p-0 sm:pt-4">
      <div className='p-20 sm:pl-8 sm:pt-20 sm:p-0 text-center bg-[#FFF]'>
        <h2 className='text-[40px] text-[#2E2E2E] font-[600] sm:text-left sm:text-[32px] sm:mb-5'>We help good businesses become GREAT</h2>
        <p className='text-[16px] font-[400] text-[#666] sm:w-[350px] sm:text-left'>Empowering we are your long-term growth partner focused on connecting your company's "why" to your target market and building meaningful connections with them.</p>

<p className='mt-10 text-[16px] font-[400] text-[#666] sm:w-[350px] sm:text-left sm:mt-5'>Identifying and connecting with your target market allows us to leverage advance technology to enhance your business and meet the needs and desires of your ideal customers, creating a win/win/win. with Innovative Tech Expertise and Tailored Solutions for Success</p>
 <div className={inter.className}>
        <div className='flex space-x-8 justify-center sm:mt-5'>
          <button className=" bg-white text-blue text-[14px] font-[600] leading-normal  hover:text-white border-[1px] w-[140px] h-[41px]  rounded-[8px] border-white-500 hover:bg-blue mt-4 ">Contact Us
          </button>
          <button className=" bg-blue text-white hover:bg-white text-[14px] font-[600] leading-normal hover:text-blue hover:border-blue border-[1px] w-[140px] h-[41px] rounded-[8px]  border-white-500  mt-4 ">Get Quote</button>
          </div>
          </div>
</div>
<div className='h-[1091px]  bg-[#FAFAFA] flex sm:w-full flex-col justify-center items-center pt-8 sm:h-[2256px]'>
  <div className='text-center'>
  <h2 className='text-[32px] text-[#2E2E2E] font-[600]'>Our Service</h2>
  <p className='text-[14px] text-[#666] sm:mb-3'>Services tailored to enhance your business growth</p>
  </div>
  
 <div className='flex'>
  <div className='flex space-x-4 mb-8 mt-4 sm:mt-0  sm:flex-col  sm:space-x-0 sm:items-center sm:space-y-8'>
          <div className='bg-white w-[604px] mt-2 sm:mt-0 pl-[26px] pr-[97px]  pt-[35px] pb-[26px] h-[410px] shadow rounded-[5px] sm:w-[350px] sm:h-[500px] sm:pl-2 sm:pr-4 sm:pt-4 sm:pb-8'>
          <div className='bg-[#DC4BCD] rounded-[50%] w-[64px] h-[64px] flex items-center justify-center  p-1  sm:ml-2 '>
            <Image 
            src={dataloss}
            alt='data'
            width="24"
            height="24"
            priority
            />
            </div>
            <h2 className='mt-3 text-[#2A2A2A] text-[24px] font-[600] mb-1  ml-2'>Customer Research</h2>

            <p className='text-[14px] font-[400]  leading-normal w-[481px] text-[#666666] mb-4 sm:w-[318px]  sm:pl-2'>At UVISE, we understand that the key to triumph lies in understanding your customers deeply. By gaining valuable insights into their wants and needs, we help you uncover untapped opportunities and pioneer groundbreaking products, services, and experiences.</p>
            <p className='text-[14px] font-[400]  leading-normal w-[481px] text-[#666666] sm:w-[318px] sm:pl-2 sm:pb-4 '>Our Customer Research service equips your business with critical insights to make informed decisions and stay ahead of the competition. Our team of seasoned analysts delves deep into your industry landscape, identifying emerging trends, consumer behavior patterns, and competitor strategies. Armed with data-driven findings, we empower you to seize growth opportunities, optimize your marketing efforts, and position your brand strategically in the market.</p>

          </div>
           <div className='bg-white w-[604px] mt-2 sm:mt-0 pl-[26px] pr-[97px]  pt-[35px] pb-[26px] h-[410px] shadow rounded-[5px] sm:w-[350px] sm:h-[500px] sm:pl-2 sm:pr-4 sm:pt-4 sm:pb-8'>
          <div className='bg-[#0443E2] rounded-[50%] w-[64px] h-[64px] flex items-center justify-center mt-2 p-1 sm:ml-2 '>
            <Image 
            src={help}
            alt='help'
            width="24"
            height="24"
            priority
            />
            </div>
            <h2 className='mt-3 text-[#2A2A2A] text-[24px] font-[600] mb-1 sm:pl-2 '>Technical Support</h2>
             <p className='text-[14px] font-[400]  leading-normal w-[481px] text-[#666666] mb-4 sm:w-[318px]  sm:pl-2'>Our technical support services extend beyond resolving immediate problems; we collaborate with you to design robust technology solutions that align with your business goals.</p>
            <p className='text-[14px] font-[400]  leading-normal w-[481px] text-[#666666] sm:w-[318px]  sm:pl-2 '>Our Technical Support service ensures your business operates seamlessly and efficiently. With a dedicated team of skilled technicians, we offer responsive and reliable assistance, resolving technical issues promptly to minimize downtime. Whether it's troubleshooting software problems, managing hardware installations, or providing remote support, we are your dependable partner in maintaining a smooth and productive workflow.</p>

          </div>
          </div>
  </div>

   <div className='flex '>
  <div className='flex space-x-4 sm:flex-col sm:space-x-0 sm:items-center sm:space-y-8'>
          <div className='bg-white w-[604px] mt-2 sm:mt-0 pl-[26px] pr-[97px]  pt-[35px] pb-[26px] h-[410px] shadow rounded-[5px] sm:w-[350px] sm:h-[500px] sm:pl-2 sm:pr-4 sm:pt-4 sm:pb-8'>
          <div className='bg-[#ECE53D] rounded-[50%] w-[64px] h-[64px] flex items-center justify-center  p-1  sm:ml-2 mt-2'>
             <Image 
            src={cybsec}
            alt='cyber'
            width="24"
            height="24"
            priority
            />
            </div>
            <h2 className='mt-3 text-[#2A2A2A] text-[24px] font-[600] mb-1 sm:pl-2 '>Cyber Security</h2>

            <p className='text-[14px] font-[400]  leading-normal w-[481px] text-[#666666] mb-4 sm:w-[318px]  sm:pl-2'>At UVISE, we understand that the key to triumph lies in understanding your customers deeply. By gaining valuable insights into their wants and needs, we help you uncover untapped opportunities and pioneer groundbreaking products, services, and experiences.</p>
            <p className='text-[14px] font-[400]  leading-normal w-[481px] text-[#666666] sm:w-[318px]  sm:pl-2  '>Our Customer Research service equips your business with critical insights to make informed decisions and stay ahead of the competition. Our team of seasoned analysts delves deep into your industry landscape, identifying emerging trends, consumer behavior patterns, and competitor strategies. Armed with data-driven findings, we empower you to seize growth opportunities, optimize your marketing efforts, and position your brand strategically in the market..</p>

          </div>
           <div className='bg-white w-[604px] mt-2 sm:mt-0 pl-[26px] pr-[97px]  pt-[35px] pb-[26px] h-[410px] shadow rounded-[5px] sm:w-[350px] sm:h-[500px] sm:pl-2 sm:pr-4 sm:pt-4 sm:pb-8'>
          <div className='bg-[#CA4848] rounded-[50%] w-[64px] h-[64px] flex items-center justify-center mt-2 p-2 sm:ml-2'>
            <Image 
            src={chart}
            alt='chart'
            width="24"
            height="24"
            priority
            />
            </div>
            <h2 className='mt-3 text-[#2A2A2A] text-[24px] font-[600] mb-1 sm:pl-2  '>Data analytics</h2>
             <p className='text-[14px] font-[400]  leading-normal w-[481px] text-[#666666] mb-4 sm:w-[318px]  sm:pl-2'>Our technical support services extend beyond resolving immediate problems; we collaborate with you to design robust technology solutions that align with your business goals.</p>
            <p className='text-[14px] font-[400]  leading-normal w-[481px] text-[#666666] sm:w-[318px]  sm:pl-2 '>Our Technical Support service ensures your business operates seamlessly and efficiently. With a dedicated team of skilled technicians, we offer responsive and reliable assistance, resolving technical issues promptly to minimize downtime. Whether it's troubleshooting software problems, managing hardware installations, or providing remote support, we are your dependable partner in maintaining a smooth and productive workflow.</p>

          </div>
          </div>
  </div>

</div>
   <div className='h-[595px] bg-white max-w-[1440px] mt-20 pt-12 sm:w-full sm:h-[1062px] sm:flex sm:justify-center sm:flex-col sm:items-center sm:mt-5'>
          <div className='flex justify-center flex-col items-center mb-10'>
        <h3 className='text-[32px] font-[600] sm:text-[24px]'>Client Testimonial</h3>
        <p className='text-[14px] font-[400]'>What people are saying about us
</p>
</div>
<div className='flex  justify-around space-x-16 sm:flex-col sm:space-x-0 sm:space-y-4'>
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

   <Featured  / >

    </main>
  )
}

export default page