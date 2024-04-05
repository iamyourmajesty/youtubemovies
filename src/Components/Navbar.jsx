import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='md:text-xl lg:text-2xl flex flex-wrap gap-3 md:gap-2 lg:gap-4 my-3 justify-center self-start '> 
    <NavLink to='/south' className=' rounded bg-[#2222] text-[#222] px-1 border shadow-lg cursor-pointer hover:bg-[#2222220b] '  >South</NavLink> 
    <NavLink to='/bollywood' className=' rounded bg-[#2222] text-[#222] px-1 border shadow-lg cursor-pointer hover:bg-[#2222220b] ' >Bollywood</NavLink> 
    <NavLink to='/bhojpuri' className=' rounded bg-[#2222] text-[#222] px-1 border shadow-lg cursor-pointer hover:bg-[#2222220b] '  >Bhojpuri</NavLink> 
    <NavLink to='/horror' className=' rounded bg-[#2222] text-[#222] px-1 border shadow-lg cursor-pointer hover:bg-[#2222220b] '  >Horror</NavLink> 
    <NavLink to='/commedy' className=' rounded bg-[#2222] text-[#222] px-1 border shadow-lg cursor-pointer hover:bg-[#2222220b]  ' >Commedy</NavLink> 
    </div>
  )
}

export default Navbar