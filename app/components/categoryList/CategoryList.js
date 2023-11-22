import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
const CategoryList = () => {
  return (
    <div className='sm:w-full'>
      <h1 className='text-[32px] ml-[125px] pb-10 sm:ml-[10px] sm:mt-[50px]'>Popular Categories</h1>
      <div className='flex space-x-[50px] ml-[125px] sm:flex-col sm:space-x-0 sm:ml-[10px] '>
          <div className='sm:flex sm:flex-row sm:space-x-2 sm:mb-2 flex-row space-y-4 sm:space-y-0'>
          <Link href={`/blog`}  className=' bg-[#ECE53D] bg-opacity-20 flex flex-wrap gap-3 pt-5 pb-5 pl-10 pr-10 sm:pt-1 sm:pb-1 sm:pl-3 sm:pr-3 rounded-[5px] sm:text-[14px]'>
          <Image src="/blogdes.jpg" alt='' width={30} height={30} className='rounded-full'  />
          Products
          </Link>
          <Link href={`/blog`}  className=' bg-[#DC4BCD] bg-opacity-20 flex flex-wrap gap-3 pt-5 pb-5 pl-10 pr-10 sm:pt-1 sm:pb-1 sm:pl-3 sm:pr-3 rounded-[5px] sm:text-[14px]'>
          <Image src="/blogdes.jpg" alt='' width={30} height={30} className='rounded-full'  />
          Design
          </Link>
          <Link href={`/blog`}  className=' bg-[#0443E2] bg-opacity-20  flex flex-wrap gap-3 pt-5 pb-5 pl-10 pr-10 sm:pt-1 sm:pb-1 sm:pl-3 sm:pr-3 rounded-[5px] sm:text-[14px]'>
          <Image src="/blogdes.jpg" alt='' width={30} height={30} className='rounded-full'  />
          FinTech
          </Link>
          </div>
          <div className='sm:flex sm:flex-row sm:space-x-2 space-y-4 sm:space-y-0'>
          <Link href={`/blog`}  className=' bg-[#CA4848] bg-opacity-20 flex flex-wrap gap-3 pt-5 pb-5 pl-10 pr-10 sm:pt-1 sm:pb-1 sm:pl-3 sm:pr-3 rounded-[5px] sm:text-[14px]'>
          <Image src="/blogdes.jpg" alt='' width={30} height={30} className='rounded-full'/>
          Marketing
          </Link>
          <Link href={`/blog`}  className=' bg-[#ECE53D] bg-opacity-20 flex flex-wrap gap-3 pt-5 pb-5 pl-10 pr-10 sm:pt-1 sm:pb-1 sm:pl-3 sm:pr-3 rounded-[5px] sm:text-[14px] '>
          <Image src="/blogdes.jpg" alt='' width={30} height={30} className='rounded-full'/>
          CS/CX
          </Link>
        <Link href={`/blog`}  className=' bg-[#407FFF] bg-opacity-20 flex flex-wrap gap-3 pt-5 pb-5 pl-10 pr-10  sm:pt-1 sm:pb-1 sm:pl-3 sm:pr-3 rounded-[5px] sm:text-[14px]'>
          <Image src="/blogdes.jpg" alt='' width={30} height={30} className='rounded-full'/>
          Media
          </Link>
          </div>

      </div>
    </div>
  )
}

export default CategoryList