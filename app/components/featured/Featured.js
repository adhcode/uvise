import React from 'react'
import Image from 'next/image'



const Featured = () => {
  return (
     <div className='max-w-[1440px] h-[478px] mb-10 sm:flex sm:flex-col sm:max-w-[390px] sm:justify-center sm:items-center sm:mt-[50px] sm:mr-0 sm:h-[635px]'>
    <div className='text-center '>
    <h2 className='text-[32px] font-[600] text-[#2A2A2A]'>Blog Post</h2>
    <p className='text-[14px] font-[400] text-[#666] mb-[32px]'>Latest Post</p>
    </div>
    <div className='flex space-x-10 sm:space-x-0 sm:ml-4 sm:flex-col items-center justify-center'>
      <div className='w-[604px] h-[383px] bg-[#D9D9D9] sm:w-[390px] sm:h-[243px]'>
 <Image src="/blog.png" alt='' width={604} height={338} 
            
            />
      </div>
      <div className='w-[381px] h-[185px] sm:mr-20 sm:mb-8 sm:mt-4  mb-32'>
        <h2 className='text-[32px] font-[600] sm:text-[24px] text-[#2A2A2A]'>True strategies to optimized your landing page for conversion</h2>
      <p className='text-[14px] mb-[40px] mt-[16px] font-[400] text-[#666] sm:text-[14px]'>Your website's landing page is often the first interaction a potential customer has with your brand. So it's crucial to make that initial impression count, crafting a captivating landing page to grab the attention of prospective customer will help to convert more...
</p> 
<button className='w-[181px] h-[41px] border rounded-sm '>
  Continue reading
</button>
      </div>
    </div>
    </div> 
  )
}

export default Featured