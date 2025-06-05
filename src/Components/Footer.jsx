import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faTelegram } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <footer className='h-[300px] p-[30px] bg-[#1A2F08] flex flex-col  items-center gap-5 justify-around'>
      <div className='px-[10px]'>
        <FontAwesomeIcon icon={faFacebook}  className='p-[5px]  text-white rounded-[100px] transition ease-in-out hover:text-gray-500' size='3x'/>
        <FontAwesomeIcon icon={faGithub}  className='p-[5px]  text-white rounded-[100px] transition ease-in-out hover:text-gray-500' size='3x'/>
        <FontAwesomeIcon icon={faTelegram}  className='p-[5px] text-white rounded-[100px] transition ease-in-out hover:text-gray-500' size='3x'/>
        <FontAwesomeIcon icon={faInstagram}  className='p-[5px] text-white rounded-[100px] transition ease-in-out hover:text-gray-500' size='3x'/>
      </div>
      <div className='flex justify-center gap-5 items-center'>
        <Link to="/" className='text-white text-[24px] transition ease-in-out hover:text-gray-500'>Home</Link>
        <Link to="/sobre" className='text-white text-[24px] transition ease-in-out hover:text-gray-500'>Sobre</Link>
        <Link to="/solucao" className='text-white text-[24px] transition ease-in-out hover:text-gray-500'>Solução</Link>
      </div>

      <p className='text-white'>© 2025 All Rights Reserved</p>
    </footer>
  )
}

export default Footer
