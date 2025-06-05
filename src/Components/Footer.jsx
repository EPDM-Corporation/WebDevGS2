import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faTelegram } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer className='h-[300px] bg-[#1A2F08]'>
      <div>
        <FontAwesomeIcon icon={faFacebook}  className='bg-white'/>
        <FontAwesomeIcon icon={faGithub}  className='bg-white'/>
        <FontAwesomeIcon icon={faTelegram}  className='bg-white'/>
        <FontAwesomeIcon icon={faInstagram}  className='bg-white'/>
      </div>
    </footer>
  )
}

export default Footer
