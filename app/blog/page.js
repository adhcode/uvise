import React from "react";
import Link from "next/link";
import Featured from "../components/featured/Featured";
import CategoryList from "../components/categoryList/CategoryList";
import CardList from "../components/cardList/CardList";
import Menu from "../menu/Menu";






const page = () => {
  return (
     <div className="">
      <div className="pt-20 ml-[125px] sm:flex sm:flex-col sm:ml-[10px] sm sm:max-w-[390px] ">
        <h1 className="text-[40px] mt-10 text-[#2A2A2A] sm:text-[32px] ">On the blog!</h1>
        <p className="text-[24px] sm:text-[16px] text-[#666666]">Stay updated with our latest news</p>
      </div>
     <Featured />
      <CategoryList />
      <div className="flex gap-[50px] sm:gap-0 sm:flex sm:flex-col">
        <CardList />
        <Menu />
      </div>
    </div>
  )
}

export default page