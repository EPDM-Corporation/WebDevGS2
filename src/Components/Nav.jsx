import React from 'react'
import Logo from '../assets/Logo.png'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <header className='h-[118px] bg-[#1A2F08] flex justify-around items-center'>
        <Link to="/"><img src={Logo} alt="" className='w-[140px]'/></Link>
        {/* NAV */}
        <div className='flex justify-around items-center gap-7'>
            <Link to="/" className='text-[18px] text-[#FFFFFF] transition duration-300 ease-in-out hover:text-gray-500'>Home</Link>
            <Link to="/sobre" className='text-[18px] text-[#FFFFFF] transition duration-300 ease-in-out hover:text-gray-500'>Sobre</Link>
            <Link to="/" className='text-[18px] text-[#FFFFFF] transition duration-300 ease-in-out hover:text-gray-500'>Solução</Link>
        </div>
    </header>
  )
}

export default Nav
