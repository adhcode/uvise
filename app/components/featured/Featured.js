import React from 'react'
import Image from 'next/image'



const Featured = () => {
  return (
     <div className='max-w-[1440px] h-[478px] ml-[177px] mr-[177px] mb-10 sm:flex sm:flex-col sm:w-[480px] sm:justify-center sm:items-center sm:mt-[150px] sm:mr-0 sm:ml-[-60px] sm:h-[635px]'>
    <div className='text-center '>
    <h2 className='text-[32px] font-[600] text-[#2A2A2A]'>Blog Post</h2>
    <p className='text-[14px] font-[400] text-[#666] mb-[32px]'>Latest Post</p>
    </div>
    <div className='flex space-x-20 sm:flex-col'>
      <div className='w-[604px] h-[383px] bg-[#D9D9D9] sm:w-[350px] sm:h-[383px] sm:ml-[80px]'>
 <Image src="/blog.png" alt='' width={604} height={338} 
            
            />
      </div>
      <div className='w-[381px] h-[185px]'>
        <h2 className='text-[32px] font-[600] sm:text-[24px] text-[#2A2A2A]'>True strategies to optimized your landing page for conversion</h2>
      <p className='text-[16px] mb-[40px] mt-[16px] font-[400] text-[#666] sm:text-[14px]'>Your website's landing page is often the first interaction a potential customer has with your brand. So it's crucial to make that initial impression count, crafting a captivating landing page to grab the attention of prospective customer will help to convert more...
</p> 
<button className='w-[181px] h-[41px] border rounded-sm'>
  Continue reading
</button>
      </div>
    </div>
    </div> 
  )
}

export default Featured