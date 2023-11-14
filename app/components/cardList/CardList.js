import React from 'react'
import Pagination from '../pagination/Pagination'
import Card from '@/app/card/Card'

const CardList = () => {
  return (
    <div className='max-w-[700px] ml-[125px] sm:ml-[10px]'> 
    <h1 className='text-[30px] mt-8 mb-8 font-[600]'>Recent Posts</h1>
    <div className=''>
       <Card />
      
    </div>
        <Pagination />
    </div>
  )
}

export default CardList