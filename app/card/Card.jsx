import Image from "next/image"
import Link from "next/link"





const Card = () => {
  return (
    <div className="mb-[50px] flex items-center sm:items-start gap-[50px] sm:gap-0 sm:flex-col sm:w-[390px] sm:pl-2">
        <div className="flex-1 h-[300px] relative sm:hidden">
        <Image src="/uiux.jpg" fill className="cover sm:hidden"/>
        </div>
        <div className="flex-1">
            <div className="mb-4 flex space-x-2 text-[14px] text-[#666]">
                <span className="">11.02.2023</span>
                <span>Design</span>
            </div>
            <Link href="/">
                <h1 className="text-[24px] mb-4 font-[600] text-[#2A2A2A] sm:text-[18px] sm:w-[300px]" >First Impressions Matter: How UX and UI Design Affect Your Business Growth.</h1>
            </Link>
            
            <p className="text-[#666] mb-4 sm:text-[14px] sm:w-[300px] ">First impressions matter, especially in the digital world. Regarding your business website, UX (User Experience) and UI (User Interface) design can make or break your growth.
</p>
<Link href="/" className="underline text-[#666] underline-red sm:text-[14px]">Read more..</Link>
        </div>
    </div>
  )
}

export default Card