import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../expand.png'
import { Routes, Route } from 'react-router-dom'
import Product from '../pages/product.js'
import SignUp from '../pages/signup.js'
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen(!isOpen)
    document.body.style.overflow = !isOpen ? 'hidden' : 'auto'
  }
  return (
    <>
      <div className='fixed text-sm lg:text-base leading-[1.1] top-0 left-0 right-0 bg-slate-500 justify-center text-center text-slate-50 font-medium p-6 lg:p-5 z-50'>
        <p>
          You're invited to Tabsforum Expo! 📣
          <Link className='underline' to='www.tabsform.com'>
            Register Now
          </Link>
        </p>
      </div>
      <div className='navbar-container fixed top-[60px] left-0 right-0 bg-white z-50 w-full'>
        <div className='m-auto flex justify-between items-center min-h-16 px-4 py-5 relative z-[60] lg:max-w-8xl'>
          <div className='flex items-center z-[60] relative lg:flex-1'>
            <img
              src={logo}
              alt='Brand Logo'
              width={25}
              height={18}
              style={{ height: '28px' }}
            />

            <Link to='https://tabsform.com'>
              <span className='font-normal ml-2 text-3xl font-pacifico'>
                Tabs
              </span>
            </Link>
          </div>
          <div className='lg:hidden flex items-center h-full relative z-[60]'>
            <input
              type='checkbox'
              className='absolute m-0 bg-none appearance-none border-none cursor-pointer hidden'
            />
            <button
              aria-expanded={isOpen}
              aria-label={
                isOpen
                  ? 'Close mobile navigation menu'
                  : 'Open mobile navigation menu'
              }
              className='relative w-14 h-14 flex items-center justify-center'
              onClick={toggleMenu}
            >
              {/* Close Menu SVG */}
              <svg
                id='close-menu-svg'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                fill='none'
                viewBox='0 0 24 24'
                className={`absolute inset-0 mx-auto my-auto transition-opacity duration-200 ease-in-out ${
                  isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
              >
                <path
                  d='M5 5L19 19M19 5L5 19'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                />
              </svg>

              {/* Open Menu SVG */}
              <svg
                id='open-menu-svg'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                fill='none'
                viewBox='0 0 24 24'
                className={`absolute inset-0 mx-auto my-auto transition-opacity duration-200 ease-in-out ${
                  isOpen ? 'opacity-0 invisible' : 'opacity-100 visible'
                }`}
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 7h16M4 12.5h16M4 18h16'
                />
              </svg>
            </button>
          </div>

          <ul
            className={`fixed top-0 left-0 w-full h-screen bg-white flex flex-col justify-start items-center pt-36 font-normal px-4 space-y-8 transition-transform duration-200 ease-in-out z-50 ${
              isOpen ? 'translate-x-0 text-3xl' : 'translate-x-full'
            } lg:relative lg:text-base lg:translate-x-0 lg:mx-auto lg:flex lg:flex-row lg:w-auto lg:h-auto lg:space-y-0 lg:space-x-6 lg:bg-transparent lg:pt-0 lg:px-0 lg:items-center lg:flex-2 lg:justify-center`}
          >
            <li className='w-full text-left py-2 border-b border-gray-200 md:border-none md:py-0 md:px-4'>
              <Link to='/products' className='hover:text-gray-500'>
                Products
              </Link>
            </li>
            <li className='w-full text-left py-2 border-b border-gray-200 md:border-none md:py-0 md:px-4'>
              <Link to='/solutions' className='hover:text-gray-500'>
                Solutions
              </Link>
            </li>
            <li className='w-full text-left py-2 border-b border-gray-200 md:border-none md:py-0 md:px-4'>
              <Link to='/resources' className='hover:text-gray-500'>
                Resources
              </Link>
            </li>
            <li className='w-full text-left py-2 border-b border-gray-200 md:border-none md:py-0 md:px-4'>
              <Link to='/enterprise' className='hover:text-gray-500'>
                Enterprise
              </Link>
            </li>
            <li className='w-full text-left py-2 md:px-4'>
              <Link to='/pricing' className='hover:text-gray-500'>
                Pricing
              </Link>
            </li>
          </ul>

          <div
            className={`fixed bottom-8 left-0 right-0 flex justify-center gap-4 items-center w-full px-6 z-[60] ${
              isOpen ? 'flex' : 'hidden'
            } lg:relative lg:flex lg:flex-row lg:gap-4 lg:w-auto lg:bottom-auto lg:px-0 lg:items-center lg:flex-1 lg:justify-end`}
          >
            <Link to='/login' className='text-black'>
              Log in
            </Link>
            <Link
              to='/signup'
              className='inline-block font-medium border-2 border-black text-white bg-black rounded-2xl py-2 px-4'
            >
              Sign Up
            </Link>
          </div>
        </div>
        <Routes>
          <Route path='/products' element={<Product />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </div>
    </>
  )
}
