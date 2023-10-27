import React from 'react'
import Pagination from '../pagination/Pagination'
import Card from '@/app/card/Card'

const CardList = () => {
  return (
    <div className='max-w-[700px] ml-[125px]'> 
    <h1 className='text-[30px] mt-8 mb-8 font-[600]'>Recent Posts</h1>
    <div className=''>
       <Card />
       <Card />
       <Card />
       <Card />
    </div>
        <Pagination />
    </div>
  )
}

export default CardList