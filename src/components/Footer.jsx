import React, { useEffect, useState, useRef } from 'react'
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
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState('')
  
  // Refs for GSAP animations
  const footerRef = useRef(null)
  const column1Ref = useRef(null)
  const column2Ref = useRef(null)
  const column3Ref = useRef(null)
  const column4Ref = useRef(null)
  const socialIconsRef = useRef(null)
  const scrollTopButtonRef = useRef(null)
  const footerBottomRef = useRef(null)

  useEffect(() => {
    // Initial entrance animation for the footer
    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1,
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse'
        }
      }
    )

    // Staggered animation for footer columns
    const columns = [column1Ref.current, column2Ref.current, column3Ref.current, column4Ref.current]
    gsap.fromTo(
      columns,
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top bottom-=50',
          toggleActions: 'play none none reverse'
        }
      }
    )

    // Social icons animation
    gsap.fromTo(
      socialIconsRef.current.children,
      { scale: 0, opacity: 0 },
      { 
        scale: 1, 
        opacity: 1, 
        duration: 0.5, 
        stagger: 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: socialIconsRef.current,
          start: 'top bottom-=30',
          toggleActions: 'play none none none'
        }
      }
    )

    // Footer bottom animation
    gsap.fromTo(
      footerBottomRef.current,
      { opacity: 0 },
      { 
        opacity: 1, 
        duration: 1,
        delay: 1,
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'center bottom',
          toggleActions: 'play none none none'
        }
      }
    )

    // Scroll button animation
    const scrollButtonTimeline = gsap.timeline({ paused: true })
    scrollButtonTimeline.to(
      scrollTopButtonRef.current,
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.5,
        ease: 'power2.out'
      }
    )

    // Toggle visibility based on scroll position
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
        scrollButtonTimeline.play()
      } else {
        setIsVisible(false)
        scrollButtonTimeline.reverse()
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
      // Kill all ScrollTrigger instances to prevent memory leaks
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  // Hover animations for social icons
  const handleSocialIconHover = (e, isEnter) => {
    gsap.to(e.currentTarget, {
      scale: isEnter ? 1.2 : 1,
      duration: 0.3,
      ease: 'power1.out'
    })
  }

  // Animation for the scroll to top button
  const scrollToTop = () => {
    // Animate the scroll
    gsap.to(window, {
      scrollTo: 0,
      duration: 1,
      ease: 'power2.inOut'
    })
  }

  // Animation for form submission
  const handleSubmit = e => {
    e.preventDefault()
    
    // Animate the form on submission
    const form = e.currentTarget
    gsap.fromTo(
      form,
      { x: 0 },
      { 
        x: [-5, 5, -5, 5, 0], 
        duration: 0.5, 
        ease: 'power1.inOut',
        onComplete: () => {
          alert(`Thank you for subscribing with ${email}!`)
          setEmail('') // Clear the input
        }
      }
    )
  }

  return (
    <footer ref={footerRef} className='bg-black text-blue-75 py-8 mt-8'>
      <div className='container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
        {/* Column 1: Logo/About */}
        <div ref={column1Ref} className='footer-col'>
          <h3 className="text-lg font-semibold mb-4 relative after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:w-12 after:h-[2px] after:bg-blue-500">
            Company
          </h3>
          <p className='mb-4'>
            Your brand description here. Lorem ipsum dolor sit amet.
          </p>
          <div ref={socialIconsRef} className='social-links flex gap-4 mt-4'>
            <a 
              href='https://www.facebook.com/scholar.connect.2025' 
              target='_blank' 
              rel='noopener noreferrer'
              className='bg-gray-700 hover:bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300'
              onMouseEnter={(e) => handleSocialIconHover(e, true)}
              onMouseLeave={(e) => handleSocialIconHover(e, false)}
            >
              <FaFacebookF />
            </a>
            <a
              href='https://x.com/easy_soul1' 
              target='_blank' 
              rel='noopener noreferrer'
              className='bg-gray-700 hover:bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300'
              onMouseEnter={(e) => handleSocialIconHover(e, true)}
              onMouseLeave={(e) => handleSocialIconHover(e, false)}
            >
              <FaTwitter />
            </a>
            <a
              href='https://www.instagram.com/easysoul001' 
              target='_blank' 
              rel='noopener noreferrer'
              className='bg-gray-700 hover:bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300'
              onMouseEnter={(e) => handleSocialIconHover(e, true)}
              onMouseLeave={(e) => handleSocialIconHover(e, false)}
            >
              <FaInstagram />
            </a>
            <a
              href='https://www.linkedin.com/in/adejumo-adedayo-frontend-dev' 
              target='_blank' 
              rel='noopener noreferrer'
              className='bg-gray-700 hover:bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300'
              onMouseEnter={(e) => handleSocialIconHover(e, true)}
              onMouseLeave={(e) => handleSocialIconHover(e, false)}
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Column 2: Links */}
        <div ref={column2Ref} className='footer-col'>
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
        <div ref={column3Ref} className='footer-col'>
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
        <div ref={column4Ref} className='footer-col'>
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
      <div ref={footerBottomRef} className='footer-bottom bg-black text-blue-100 text-center py-4 mt-8 relative'>
        <p>&copy; 2025 Easy Tech. All rights reserved.</p>
        <button
          ref={scrollTopButtonRef}
          onClick={scrollToTop}
          className={`back-to-top absolute right-5 top-[-20px] bg-blue-500 hover:bg-blue-700 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
            isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      </div>
    </footer>
  )
}

export default Footer
