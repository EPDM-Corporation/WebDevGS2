import React from 'react'
import Logo from '../assets/Logo.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'


const Nav = () => {
      const [valor, setValor] = useState(() => {
        try {
            const item = localStorage.getItem('email');
            console.log(item)
            return item
        } catch (error) {
            console.error('Erro ao ler localStorage:', error);
            return null
        }
    });
    const handleLogout = () => {
        localStorage.removeItem('email');
        setValor(null);
    };
  return (
    <header className='h-[118px] bg-[#1A2F08] flex justify-around items-center'>
        <Link to="/"><img src={Logo} alt="" className='w-[140px]'/></Link>
        {/* NAV */}
        <div className='flex justify-around items-center gap-7'>
            <Link to="/" className='text-[18px] text-[#FFFFFF] transition duration-300 ease-in-out hover:text-gray-500'>Home</Link>
            <Link to="/sobre" className='text-[18px] text-[#FFFFFF] transition duration-300 ease-in-out hover:text-gray-500'>Sobre</Link>
            <Link to="/solucao" className='text-[18px] text-[#FFFFFF] transition duration-300 ease-in-out hover:text-gray-500'>Solução</Link>
        </div>

            <div>
                {valor && typeof valor === 'string' ? (
                    <div className='flex flex-col items-center'>
                        <div className='text-[18px] text-white'>{valor}</div>
                        <button 
                            onClick={handleLogout}
                            className='text-white transition duration-300 ease-in-out hover:text-gray-500'
                        >
                            Sair
                        </button>
                    </div>
                ) : (
                    <div>
                        <Link to="/login" className='m-2 bg-[#946631] w-[90px] h-[54px] px-[24px] py-[13px] rounded-[30px] text-white transition duration-300 ease-in-out hover:text-[#C5C4C4]'>Login</Link>
                        <Link to="/cadastrar" className='m-2 bg-[#946631] w-[127px] h-[54px] px-[24px] py-[13px] rounded-[30px] text-white transition duration-300 ease-in-out hover:text-[#C5C4C4]'>Cadastrar</Link>
                    </div>
                )}
            </div>
    </header>
  )
}

export default Nav
