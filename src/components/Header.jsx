import React, { useState } from 'react'
import hbot from "../assets/images/hbot.png"
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import {motion} from "framer-motion"
export default function Header() {
    const [isOpen,setisOpen]=useState(false)
  return (
   <nav className='relative w-full h-fit flex justify-between items-center p-4'>
    <img src={hbot} alt="hbot-supplier company" className=' h-11 object-contain' />
    <div className='md:hidden' onClick={()=>setisOpen(!isOpen)} >
        <CiMenuFries className='text-3xl font-bold cursor-pointer'/>
    </div>
    {isOpen&& <motion.div 
    initial={{x:-500,}}
    animate={{x:0,transition:{duration:1}}}   
    exit={{x:-500,transition:{duration:1}}}  
    className=' block md:hidden bg-secondary w-full h-screen absolute top-0 left-0  '>
    <ul className='flex  text-white relative flex-col justify-center items-center pt-36 gap-y-10 '>
    <li>Find Suppliers</li>
    <li className='flex items-center gap-x-1'>Finde Service Tags <MdKeyboardArrowDown/></li>
    <li><button className='w-44 p-2  border-2 rounded-md border-primary text-primary font-semibold'>Login/Signup</button></li>
   </ul>
   <IoCloseOutline className='absolute text-2xl font-semibold top-4 right-7' onClick={()=>setisOpen(!isOpen)}/>
    </motion.div>}
   
    <div className='hidden md:block'>

   <ul className='flex justify-center gap-x-8 items-center pr-10  '>
    <li>Find Suppliers</li>
    <li className='flex items-center gap-x-1'>Finde Service Tags <MdKeyboardArrowDown/></li>
    <li><button className='w-44 p-2 border-2 rounded-md  border-primary text-primary font-bold'>Login/Signup</button></li>
   </ul>
    </div>
   </nav>
  )
}
