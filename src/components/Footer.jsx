import React, { useEffect, useState } from 'react'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaArrowUp
} from 'react-icons/fa'

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState('')

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility) // Cleanup
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    alert(`Thank you for subscribing with ${email}!`)
    setEmail('') // Clear the input
  }

  return (
    <footer className=' bg-black text-blue-75 py-8 mt-8'>
      <div className='container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
        {/* Column 1: Logo/About */}
        <div className='footer-col'>
          <h3 className="text-lg font-semibold mb-4 relative after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:w-12 after:h-[2px] after:bg-blue-500">
            Company
          </h3>
          <p className='mb-4'>
            Your brand description here. Lorem ipsum dolor sit amet.
          </p>
          <div className='social-links flex gap-4 mt-4'>
            <a 
              href='https://www.facebook.com/scholar.connect.2025' target='_blank' rel='noopener noreferrer'
              className='bg-gray-700 hover:bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300'
            >
              <FaFacebookF />
            </a>
            <a
              href='https://x.com/easy_soul1' target='_blank' rel='noopener noreferrer'
              className='bg-gray-700 hover:bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300'
            >
              <FaTwitter />
            </a>
            <a
              href='https://www.instagram.com/easysoul001' target='_blank' rel='noopener noreferrer'
              className='bg-gray-700 hover:bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300'
            >
              <FaInstagram />
            </a>
            <a
              href='https://www.linkedin.com/in/adejumo-adedayo-frontend-dev' target='_blank' rel='noopener noreferrer'
              className='bg-gray-700 hover:bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300'
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Column 2: Links */}
        <div className='footer-col'>
          <h3 className="text-lg font-semibold mb-4 relative after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:w-12 after:h-[2px] after:bg-blue-500 uppercase">
            Quick Links
          </h3>
          <ul>
            <li className='mb-2'>
              <a
                href='#'
                className='hover:text-blue-500 transition-colors duration-300'
              >
                Nexus
              </a>
            </li>
            <li className='mb-2'>
              <a
                href='#vault'
                className='hover:text-blue-500 transition-colors duration-300'
              >
                Vault
              </a>
            </li>
            <li className='mb-2'>
              <a
                href='#prologue'
                className='hover:text-blue-500 transition-colors duration-300'
              >
                Prologue
              </a>
            </li>
            <li className='mb-2'>
              <a
                href='#about'
                className='hover:text-blue-500 transition-colors duration-300'
              >
                About
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div className='footer-col'>
          <h3 className="text-lg font-semibold mb-4 relative after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:w-12 after:h-[2px] after:bg-blue-500">
            Contact
          </h3>
          <ul>
            <li className='mb-2'>
              <FaMapMarkerAlt className='inline-block mr-2' />Lagos, Nigeria
            </li>
            <li className='mb-2'>
              <FaPhone className='inline-block mr-2' /> +2347050205835
            </li>
            <li className='mb-2'>
              <FaEnvelope className='inline-block mr-2' /> adejumoadedayo350@gmail.com
            </li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div className='footer-col'>
          <h3 className="text-lg font-semibold mb-4 relative after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:w-12 after:h-[2px] after:bg-blue-500">
            Newsletter
          </h3>
          <form className='newsletter-form' onSubmit={handleSubmit}>
            <input
              type='email'
              placeholder='Your Email'
              required
              className='w-full px-3 py-2 mb-2 rounded-md text-gray-800'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <button
              type='submit'
              className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors duration-300'
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright + Back-to-top */}
      <div className='footer-bottom bg-black text-blue-100 text-center py-4 mt-8 relative'>
        <p>&copy; 2025 Easy Tech. All rights reserved.</p>
        <button // Changed to a button for accessibility
          onClick={scrollToTop}
          className={`back-to-top absolute right-5 top-[-20px] bg-blue-500 hover:bg-blue-700 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
            isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <FaArrowUp />
        </button>
      </div>
    </footer>
  )
}

export default Footer
