import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
const CategoryList = () => {
  return (
    <div>
      <h1 className='text-[32px] ml-[125px] pb-10'>Popular Categories</h1>
      <div className='flex space-x-[10px] ml-[125px]'>
        
          <Link href={`/blog`}  className=' bg-[#ECE53D] bg-opacity-20 flex flex-wrap gap-3 pt-5 pb-5 pl-10 pr-10 rounded-[5px]'>
          <Image src="/blogdes.jpg" alt='' width={30} height={30} className='rounded-full'  />
          Products
          </Link>
          <Link href={`/blog`}  className=' bg-[#DC4BCD] bg-opacity-20 flex flex-wrap gap-3 pt-5 pb-5 pl-10 pr-10 rounded-[5px]'>
          <Image src="/blogdes.jpg" alt='' width={30} height={30} className='rounded-full'  />
          Design
          </Link>
          <Link href={`/blog`}  className=' bg-[#0443E2] bg-opacity-20  flex flex-wrap gap-3 pt-5 pb-5 pl-10 pr-10 rounded-[5px]'>
          <Image src="/blogdes.jpg" alt='' width={30} height={30} className='rounded-full'  />
          FinTech
          </Link>
          <Link href={`/blog`}  className=' bg-[#CA4848] bg-opacity-20 flex flex-wrap gap-3 pt-5 pb-5 pl-10 pr-10 rounded-[5px]'>
          <Image src="/blogdes.jpg" alt='' width={30} height={30} className='rounded-full'  />
          Marketing
          </Link>
          <Link href={`/blog`}  className=' bg-[#ECE53D] bg-opacity-20 flex flex-wrap gap-3 pt-5 pb-5 pl-10 pr-10 rounded-[5px] '>
          <Image src="/blogdes.jpg" alt='' width={30} height={30} className='rounded-full'  />
          CS/CX
          </Link>
        <Link href={`/blog`}  className=' bg-[#407FFF] bg-opacity-20 flex flex-wrap gap-3 pt-5 pb-5 pl-10 pr-10 rounded-[5px]'>
          <Image src="/blogdes.jpg" alt='' width={30} height={30} className='rounded-full'  />
          Media
          </Link>

      </div>
    </div>
  )
}

export default CategoryList