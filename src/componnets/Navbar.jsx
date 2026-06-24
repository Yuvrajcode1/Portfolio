import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoMdMenu } from "react-icons/io";
// import { IoMdClose } from "react-icons/io";

const Navbar = () => {
    
  return (
    
     <nav className='w-full h-10 flex justify-between items-center bg-gray-800 text-white p-4 '>
        <span className='text-lg font-bold'>Portfolio</span>
        <ul className='hidden md:flex gap-4'>
            <li><NavLink to='/' className={({ isActive }) => isActive ? 'text-blue-500 border-b-2 border-red-500 font-bold' : 'text-white'}>Home</NavLink></li>
            <li><NavLink to='/about' className={({ isActive }) => isActive ? 'text-blue-500 border-b-2 border-red-500 font-bold' : 'text-white'}>About</NavLink></li>
            <li><NavLink to='/skills' className={({ isActive }) => isActive ? 'text-blue-500 border-b-2 border-red-500 font-bold' : 'text-white'}>Skills</NavLink></li>
            <li><NavLink to='/projects' className={({ isActive }) => isActive ? 'text-blue-500 border-b-2 border-red-500 font-bold' : 'text-white'}>Projects</NavLink></li>
            <li><NavLink to='/contact' className={({ isActive }) => isActive ? 'text-blue-500 border-b-2 border-red-500 font-bold' : 'text-white'}o>Contact</NavLink></li>
        </ul>
            <div className='md:hidden'>
                <NavLink to='/menu' className={({ isActive }) => isActive ? 'text-blue-500 border-b-2 border-red-500 font-bold  transition-all duration-700' : 'text-white'}>
                  <IoMdMenu className=' text-2xl' />
                </NavLink>
            </div>
     </nav>
    
  )
}

export default Navbar
