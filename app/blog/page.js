import React from "react";
import Link from "next/link";
import Featured from "../components/featured/Featured";
import CategoryList from "../components/categoryList/CategoryList";
import CardList from "../components/cardList/CardList";
import Menu from "../menu/Menu";






const page = () => {
  return (
     <div className="">
      <div className="pt-20 ml-[125px] ">
        <h1 className="text-[40px] mt-10 text-[#2A2A2A] ">On the blog!</h1>
        <p className="text-[24px] text-[#666666]">Stay updated with our latest news</p>
      </div>
     <Featured />
      <CategoryList />
      <div className="flex gap-[50px]">
        <CardList />
        <Menu />
      </div>
    </div>
  )
}

export default page