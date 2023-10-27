"use client"



import {BsPatchPlus} from 'react-icons/bs'
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';



const Write = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");
  return (

    <div className='pt-[150px] ml-[120px]'>
        <input type="text" placeholder="Tittle" className='mb-8 text-[24px] outline-none border-none text-[#ECE53D]' />
        <div className=''>
            <div className='flex space-x-2'>
            <button onClick={() => setOpen(!open)}>
           <BsPatchPlus className=' h-[20px]'/>
            </button>
            {open && <div className='flex space-x-2'>
                <button>
           <BsPatchPlus className=' h-[20px]'/>
            </button>
            <button>
           <BsPatchPlus className=' h-[20px]'/>
            </button>
            <button>
           <BsPatchPlus className=' h-[20px]'/>
            </button>
            </div>}

                </div>
                <ReactQuill theme='bubble' 
                value={value} 
                onChange={setValue} 
                placeholder='Post an Article ...'className='text-[80px] placeholder:text-[40px] placeholder:text-blue w-[100%]'/>
        </div>
        <button className='bg-[#ECE53D] pl-2 pr-2 pt-1 pb-1 rounded-md mb-4 text-[16px] '>
            Publish
        </button>
    </div>
  )
}

export default Write