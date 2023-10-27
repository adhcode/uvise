import Image from "next/image"
import Menu from "../menu/Menu"
import ceo from "../../public/Ellipse1.png"
import cto from "../../public/Ellipse2.png"
import proj from "../../public/Ellipse3.png"
import dat from "../../public/Ellipse4.png"
import doy from "../../public/Ellipse5.png"
import sam from "../../public/Ellipse6.png"
import white from "../../public/Ellipse7.png"

const SinglePage = () => {
  return (
    <div className="pt-[100px]">
        <div className=" items-center gap-[50px]">
            <div className=" flex ml-[120px] gap-[50px] ">
                <div className="mb-12">
                <h1 className="text-[48px] mt-10 w-[600px] font-[600] text-[#2A2A2A]">True strategies to optimized your landing page for conversion</h1>

            
             <div className='w-[60px] h-[60px] rounded-full bg-[#D9D9D9] mt-10'>
          <Image 
            src={ceo}
            alt='cyber'
            width="60"
            height="60"
            priority
            
            />
       </div>
      <div className="text-[#666] flex space-x-2 text-[14px] mt-2 ">
        <span>Roqeeb Abdul</span>
        <span>19.10.2023</span>
      </div>
      </div>
        <div className='w-[604px] h-[383px] bg-[#D9D9D9] sm:w-[350px] sm:h-[383px] sm:ml-[80px]'>
 <Image src="/blog.png" alt='' width={604} height={500} 
            
            />
      
      </div>
      </div>
      
      
      <div className="ml-[120px] max-w-[1400px] mt-[30px]">
        <div className="flex gap-[120px]">
            <div className="w-[600px]"> 
                <p className="text-[#2A2A2A] text-[18px] mb-4 mt-4 ">Your website's landing page is often the first interaction a potential customer has with your brand. So it's crucial to make that initial impression count, crafting a captivating landing page to grab the attention of prospective customer will help to convert more.</p>
                <h2 className="text-[18px] font-[600] italic mb-4">How exactly do you ensure your landing pages is appealing and optimized for conversion?  
</h2>
<h2 className="mb-4">Here are some tried-and-true strategies to optimize your landing page for maximum conversions.
</h2>
<p className="mb-4">1. Storytelling still works

The human brain is programmed to respond to narrative (stories) because it's helps to make complex concept more understandable and memorable. Utilizing storytelling on your landing page helps to enhance the conversion rate. You should create a narrative with all design element on your landing page to tell a story about your service's benefits and the problem it solves in a way that your potential customers can relate with.</p>
<p className="mb-4">2. Nothing else matter

Nothing else needs to be on your landing page except what matters alone. Cut all unnecessary fluff and choose only the essential. Your landing page should be speaking directly to your customer's problem and tells exactly how your service or Product can solve it. If you can do this with just a single sentence, well! Nothing else matter. Instead of too much talk on self promotion focus on sharing past client testimonial or case study.</p>
<p className="mb-4">3. Boycott Assumption

Instinct is good but you can rely solely on it. When it comes to crafting an effective landing page for your business, a data driven approach help to achieve the intended success. You can gather valuable insight through iterative design process like design thinking. You can ensure your landing page is engaging and optimized for conversion through continuous testing, analysis and appropriate adjustments.</p>
<p className="mb-4">4. Handle objection with FAQ section

FAQ section is a great way to overcome obstacles and reduce the bounce rate for your visitors. The easiest way to handle objection is to think about the key reasons why a prospect wouldn't buy and respond to their objection even before they could think about it. </p>
<p className="mb-4"> 5. Be clear and concise

Potential customer must be able to understand clearly what is it you do in your business, who you do it for and how they can work get you to do it for them. Be 100% clear so that people do not have to guess. Clear is better than cute and/or clever. Your landing page must communicates the unique value proposition of your offer clearly and concisely. Streamline the design to focus on a single, compelling call to action. </p>
<p className="mb-4">6. Make your CTA visible

At a glance you want to make sure your call to action is visible and clear because if people can't find what to click, they will walk away. Your CTA must be easy to fine and recognizeable if you want your landing page to be optimized for conversion. You can make your CTA stand out with contrasting colors, large fonts, or dynamic buttons.</p>
<p className="mb-4">7. Consider responsive design

Statistics show that most people use their phones to look up websites and make purchases, so it's vitally important to ensure your landing page has a responsive design that helps customers find and buy what they need without the hassle. For you to be sure your landing page is optimized for conversion, you want to make sure your landing page is responsive across all devices from PCs to laptops to tablets to phones. </p>
            </div>
            <Menu  />
        </div>
       
            
        
      </div>
      
        </div>
    </div>
  )
}

export default SinglePage