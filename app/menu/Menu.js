import Link from 'next/link'
import React from 'react'

const Menu = () => {
  return (
    <div className='max-w-[500px] ml-[70px] sm:ml-[15px] '>
      <div className='mb-0 mt-6'>
      
      <h1 className='text-[28px] pb-10 font-[600]'>Our Products</h1>
      </div>
      <div className='mb-8'>
        <Link href='/' className='border bg-[#ECE53D]  pl-4 pr-4 rounded-lg text-[12px] mb-2 font-[600] text-[#2A2A2A] border-none '>Products</Link>
        <p className='w-[300px] mt-2 text-[14px] font-[600]'>Stay updated on our latest products</p>
        <div className="mb-4 flex space-x-2 text-[10px] text-[#666]">
                <span className="">11.02.2023</span>
                <span>UNUSED</span>
            </div>
      </div>
      
      
      <div className='flex  flex-col gap-4 mt-12 sm:mb-4'>
        <div className='flex space-x-8'>
          <Link href={`/blog`}  className=' bg-[#ECE53D] bg-opacity-20  flex items-center justify-center  rounded-[3px] text-[14px] h-[40px] w-[80px] '>
         
          Products
          </Link>
          <Link href={`/blog`}  className=' bg-[#DC4BCD] bg-opacity-20 flex items-center justify-center   rounded-[3px] text-[14px] h-[40px] w-[80px]'>
          
          Designs
          </Link>
          <Link href={`/blog`}  className=' bg-[#0443E2] bg-opacity-20  flex items-center justify-center  rounded-[3px] text-[14px] h-[40px] w-[80px]'>
          
          Health
          </Link>
          </div>
          <div className='flex space-x-8'>
          <Link href={`/blog`}  className=' bg-[#CA4848] bg-opacity-20 flex items-center justify-center  rounded-[3px] text-[14px] h-[40px] w-[80px]'>
          
          Finance
          </Link>
          <Link href={`/blog`}  className=' bg-[#ECE53D] bg-opacity-20 flex items-center justify-center  rounded-[3px] text-[14px] h-[40px] w-[80px]'>
          
          Lifestyle
          </Link>
        <Link href={`/blog`}  className=' bg-[#407FFF] bg-opacity-20 flex items-center justify-center  rounded-[3px] text-[14px] h-[40px] w-[80px]'>
          
          Sports
          </Link>
          </div>

      </div>

    </div>

  )
}

export default Menu