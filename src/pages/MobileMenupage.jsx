import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoMdClose } from "react-icons/io";

const MobileMenupage = () => {
  return (
  <div className="fixed inset-0">
      <div className='h-10 w-full flex justify-between items-center px-4 bg-gray-800 text-white'>
            <span className=' text-lg'>Portfolio</span>
            <NavLink to='/' className={({ isActive }) => isActive ? 'text-blue-500 border-b-2 border-red-500 font-bold' : 'text-white'}>
               <IoMdClose />
            </NavLink>
      </div>
    
         <nav className=' min-h-screen flex flex-col bg-black text-white p-4 '>
            <ul className='flex flex-col gap-4'>
                <li><NavLink to='/' className={({ isActive }) => isActive ? 'text-blue-500 border-b-2 border-red-500 font-bold' : 'text-white'}>Home</NavLink></li>
                <li><NavLink to='/about' className={({ isActive }) => isActive ? 'text-blue-500 border-b-2 border-red-500 font-bold' : 'text-white'}>About</NavLink></li>
                <li><NavLink to='/skills' className={({ isActive }) => isActive ? 'text-blue-500 border-b-2 border-red-500 font-bold' : 'text-white'}>Skills</NavLink></li>
                <li><NavLink to='/projects' className={({ isActive }) => isActive ? 'text-blue-500 border-b-2 border-red-500 font-bold' : 'text-white'}>Projects</NavLink></li>
                <li><NavLink to='/contact' className={({ isActive }) => isActive ? 'text-blue-500 border-b-2 border-red-500 font-bold' : 'text-white'}o>Contact</NavLink></li>
            </ul>
                {/* <div className='md:hidden'>
                    <NavLink to='/' className={({ isActive }) => isActive ? 'text-blue-500 border-b-2 border-red-500 font-bold' : 'text-white'}>
                        <IoMdClose />
                    </NavLink>
                </div> */}
         </nav>
   </div>
  )
}

export default MobileMenupage
