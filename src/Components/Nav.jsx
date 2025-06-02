import React from 'react'
import Logo from '../assets/Logo.png'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <header className='h-[118px] bg-[#1A2F08] flex justify-around items-center'>
        <img src={Logo} alt="" className='w-[140px]'/>
        {/* NAV */}
        <div className='flex justify-around items-center gap-7'>
            <Link to="/">Home</Link>
            <Link to="/sobre">Sobre</Link>
            <Link to="/">Solução</Link>
        </div>
    </header>
  )
}

export default Nav
