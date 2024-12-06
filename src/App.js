import './App.css'
import logo from './expand.png'
import video from './video/trailer1.mp4'
import airbnb from './images/airbnb-logo.svg'
import loewe from './images/Loewe.svg'
import sugarcrm from './images/sugarcrm.svg'
import klaviyo from './images/Klaviyo.svg'
import cartier from './images/Cartier.svg'
import image from './images/image2.png'
import React, { useEffect, useState } from 'react'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen(!isOpen)
    document.body.style.overflow = !isOpen ? 'hidden' : 'auto'
  }
  const [isMobile, setIsMobile] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  const logos = [
    { src: airbnb, alt: 'Loewe logo' },
    { src: loewe, alt: 'Airbnb logo' },
    { src: sugarcrm, alt: 'SugarCRM logo' },
    { src: klaviyo, alt: 'Klaviyo logo' },
    { src: cartier, alt: 'Cartier logo' },
  ]

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768) // Set breakpoint for mobile
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % logos.length) // Loop through logos
      }, 1000) // Adjust the speed of transition (1.5 seconds)

      return () => clearInterval(interval)
    }
  }, [isMobile, logos.length])

  return (
    <>
      <div className='min-w-screen max-w-full overflow-x-hidden'>
        <main className='w-screen overflow-x-hidden'>
          <div className='fixed text-sm lg:text-base leading-[1.1] top-0 left-0 right-0 bg-slate-500 justify-center text-center text-slate-50 font-medium p-6 lg:p-5 z-50'>
            <p>
              You're invited to Tabsforum Expo! 📣
              <a className='underline' href='www.tabsform.com'>
                Register Now
              </a>
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

                <a href='https://tabsform.com'>
                  <span className='font-normal ml-2 text-3xl font-pacifico'>
                    Tabs
                  </span>
                </a>
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
                  <a
                    href='https:/solutions.com'
                    className='hover:text-gray-500'
                  >
                    Products
                  </a>
                </li>
                <li className='w-full text-left py-2 border-b border-gray-200 md:border-none md:py-0 md:px-4'>
                  <a
                    href='https:/solutions.com'
                    className='hover:text-gray-500'
                  >
                    Solutions
                  </a>
                </li>
                <li className='w-full text-left py-2 border-b border-gray-200 md:border-none md:py-0 md:px-4'>
                  <a
                    href='https:/solutions.com'
                    className='hover:text-gray-500'
                  >
                    Resources
                  </a>
                </li>
                <li className='w-full text-left py-2 border-b border-gray-200 md:border-none md:py-0 md:px-4'>
                  <a
                    href='https:/solutions.com'
                    className='hover:text-gray-500'
                  >
                    Enterprise
                  </a>
                </li>
                <li className='w-full text-left py-2 md:px-4'>
                  <a
                    href='https:/solutions.com'
                    className='hover:text-gray-500'
                  >
                    Pricing
                  </a>
                </li>
              </ul>

              <div
                className={`fixed bottom-8 left-0 right-0 flex justify-center gap-4 items-center w-full px-6 z-[60] ${
                  isOpen ? 'flex' : 'hidden'
                } lg:relative lg:flex lg:flex-row lg:gap-4 lg:w-auto lg:bottom-auto lg:px-0 lg:items-center lg:flex-1 lg:justify-end`}
              >
                <a href='https://login.com' className='text-black'>
                  Log in
                </a>
                <a
                  href='https://signup.com'
                  className='inline-block font-medium border-2 border-black text-white bg-black rounded-2xl py-2 px-4'
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>

          <div className='pt-[100px]'>
            <section className='pt-24'>
              <div className='relative pt-10 pb-10'>
                <div className='absolute top-0 left-0 right-0 h-full z-[-1] bg-white'></div>
                {/* <div> */}

                <div className='flex-1 flex-col-reverse flex justify-center md:flex-row items-center px-8 md:pr-10 max-w-[1440px] mx-auto'>
                  <div className='flex-1 max-w-xl mt-8 h-auto md:mt-0  md:mr-8'>
                    <video
                      className='my-video'
                      src={video}
                      loop
                      autoPlay
                      muted
                      playsInline
                      onLoadedMetadata={(e) => e.target.play()}
                    />
                  </div>
                  {/* -col-start-7 -col-end-1 */}
                  <div className='flex-1 flex justify-center md:items-start md:text-left text-center items-center  flex-col row-start-1 row-end-1 font-libre '>
                    <h1 className='m-0 overflow-hidden md:text-6xl text-5xl text-balance font-normal text-opacity-55'>
                      Engaging forms that inspire connection
                    </h1>
                    <p className='mt-8 font-normal decoration-0 md:text-2xl text-xl'>
                      <span>
                        Collect all the data you need to
                        <strong> understand customers</strong> with forms
                        designed to be refreshingly different.
                      </span>
                    </p>
                    <div className='flex-col inline-flex gap-4 max-w-full mt-10'>
                      <a
                        href='https://free.com'
                        className='inline-block cursor-pointer font-medium border-solid border-2 border-black text-white bg-black rounded-2xl  py-2 px-4 '
                      >
                        Get Started-it's free
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className='px-4 py-16 grid m-auto'>
              {/* Desktop View */}
              {!isMobile && (
                <section className='px-4 py-16 grid m-auto grid-cols-[repeat(4,1fr)] gap-4 xxs:gap-6 xxs:grid-cols-[repeat(8,1fr)] lg:grid-cols-[repeat(12,1fr)] lg:gap-6'>
                  <div className='col-start-1 -col-end-1'>
                    <div className='grid gap-y-0 gap-x-6 grid-cols-[repeat(4,1fr)] justify-center my-0 -mx-4 xxs:grid-cols-[repeat(4,minmax(56px, 64px))] md:grid-cols-[repeat(8,minmax(56px, 64px))]  md:max-md:overflow-hidden text-center lg:grid-cols-[repeat(12,minmax(56px, 64px))] xl:grid-cols-[repeat(12,64px)] xl:gap-y-0 xl:gap-x-8 '>
                      <div className='col-start-1 -col-end-1 w-full gap-y-6 lg:px-16 lg:py-0 lg:justify-between md:flex md:flex-wrap  md:justify-center md:max-md:overflow-hidden'>
                        {logos.map((logo, idx) => (
                          <div key={idx} className='flex justify-center'>
                            <img
                              src={logo.src}
                              alt={logo.alt}
                              className='mx-4'
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {/* Mobile View */}
              {isMobile && (
                <div className='relative overflow-hidden h-20'>
                  <div
                    className='absolute flex transition-transform ease-in-out duration-500'
                    style={{
                      transform: `translateX(-${activeIndex * 100}%)`,
                    }}
                  >
                    {logos.map((logo, idx) => (
                      <div
                        key={idx}
                        className='w-full flex-shrink-0 text-sm flex justify-center'
                      >
                        <img
                          src={logo.src}
                          alt={logo.alt}
                          className='mx-auto w-24'
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>

            {/* <section className='px-4 py-16 grid m-auto'>
              <div className='col-start-1 -col-end-1'>
                <div className='flex justify-center md:flex-wrap md:gap-8 transition-transform ease-in-out'>
                  <div className='flex justify-center'>
                    <img src={loewe} alt='Loewe logo' className='mx-4' />
                  </div>
                  <div className='flex justify-center'>
                    <img src={airbnb} alt='Airbnb' className='mx-4' />
                  </div>
                  <div className='flex justify-center'>
                    <img src={sugarcrm} alt='SugarCRM' className='mx-4' />
                  </div>
                  <div className='flex justify-center'>
                    <img src={klaviyo} alt='Klaviyo' className='mx-4' />
                  </div>
                  <div className='flex justify-center'>
                    <img src={cartier} alt='Cartier' className='mx-4' />
                  </div>
                </div>
              </div>
            </section> */}
          </div>
          <div className='max-w-[1440px] mx-auto px-4 lg:px-8'>
            <section className='font-libre py-6 rounded-none bg-transparent overflow-hidden text-inherit'>
              <div className='grid grid-cols-[repeat(4,1fr)] xxs:grid-cols-[repeat(8,1fr)] lg:grid-cols-[repeat(12,1fr)] py-16 lg:rounded-[72px] rounded-[64px] gap-y-0  lg:gap-6 bg-slate-200'>
                <div className='lg:text-left text-center  col-start-1 -col-end-1 lg:col-start-2 lg:col-end-8 mb-10  self-center md:p-0'>
                  <section className='rounded-none overflow-hidden bg-transparent'>
                    <div className='grid gap-6 m-auto gap-y-4 xl:gap-y-6 p-0'>
                      <h2 className='m-0 lg:text-[41px] text-[29px] col-start-1 -col-end-1  tracking-tight leading-[1.1] '>
                        <div className='text-inherit'>
                          <p>
                            “We need to know that we're building the right
                            things for real problems.”
                          </p>
                        </div>
                      </h2>

                      <div className='text-[16px] leading-[1.1] lg:text-xl font-normal decoration-current'>
                        <div className='text-inherit'>
                          <p>
                            Chase Clark, Senior UX Researcher at Calm, explains
                            why they switched to Tabsform.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
                <div className='col-start-1 -col-end-1 lg:col-start-2 lg:col-end-8 lg:justify-self-start'>
                  <div className='xxs:w-auto flex flex-col flex-wrap gap-6 content-center'>
                    <div className='inline-flex flex-col gap-8 items-stretch bg-transparent min-w-[140px] max-w-full w-auto'>
                      <a
                        aria-label='Read on'
                        href='/blog/customer/calm-a-success-story-of-mindful-forms-and-empowered-decision-making/'
                        className='inline-block font-medium border-2 border-black text-white bg-black rounded-2xl py-2 px-4 text-center'
                      >
                        Read on
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right Section: Image */}
                <div className='flex w-auto row-start-2 col-start-1 row-end-auto -col-end-1 mx-4 mt-0 mb-10 md:col-start-3 md:-col-end-3 md:mt-0 md:mb-10 md:-mx-6 lg:row-start-1 lg:col-start-8 lg:row-end-3  lg:-col-end-2 lg:mx-0 lg:-my-16  justify-center items-center'>
                  <img
                    src={image}
                    alt='background'
                    className='h-full w-auto object-cover'
                  />
                </div>
              </div>
            </section>
          </div>
          <section
            className='theme--dark relative pt-0 pb-0'
            style={{
              zIndex: `1`,
            }}
          >
            <video
              className='absolute inset-0 h-full w-full bg-black object-cover'
              src='https://cdnsnty.tonyrobbins.com/2024-05-01T17-53-23.772Z-Homepage_FullScreen_Reel.mp4'
              loop
              autoPlay
              muted
              playsInline
              onLoadedMetadata={(e) => e.target.play()}
            ></video>
            <div className='absolute -inset-1 bg-black opacity-50'></div>
            <div className='wrapper flex text-balance justify-center '>
              <div className='relative max-w-3xl space-y-5 text-center'>
                <div className='!*:opacity-100'>
                  <div
                    className='prose text-white'
                    data-sentry-component='RichText'
                    data-sentry-source-file='RichText.tsx'
                  >
                    <h2 className=' font-apercupro h2-large  text-3xl font-medium my-5 leading-[1em] tracking-tighter'>
                      Master every form you see
                    </h2>
                    <p>
                      Close the gap between where you are and how you want to
                      use forms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className='relative'>
            <div className='grid gap-y-12 lg:py-24 pb-24 md:py-20 py-16  lg:grid-cols-[repeat(12,1fr)] lg:gap-y-6 lg:px-6 xxs:grid-cols-[repeat(8,1fr)] xxs:gap-6 xxs:px-6 grid-cols-[repeat(4,1fr)] px-10 gap-6 m-auto'>
              <div className='flex flex-col items-center justify-start text-center col-start-1 -col-end-1  lg:col-start-3 lg:col-span-2 lg:text-center gap-8'>
                <h3 className='text-[64px] leading-[1.1] m-0 overflow-hidden'>
                  96%
                </h3>
                <span className='font-normal text-base lg:text-xl leading-[1.2] m-0 overflow-hidden'>
                  of customers say they have a better brand experience
                </span>
              </div>
              <div className='flex flex-col items-center justify-start text-center col-start-1 -col-end-1  lg:col-start-6 lg:col-span-2 lg:text-center gap-8'>
                <h3 className='text-[64px] leading-[1.1] m-0 overflow-hidden'>
                  95%
                </h3>
                <span className='font-normal text-base lg:text-xl leading-[1.2] m-0 overflow-hidden'>
                  of customers say they gather more data, more easily
                </span>
              </div>
              <div className='flex flex-col items-center justify-start text-center col-start-1 -col-end-1  lg:col-start-9 lg:col-span-2 lg:text-center gap-8'>
                <h3 className='text-[64px] leading-[1.1] m-0 overflow-hidden'>
                  87%
                </h3>
                <span className='font-normal text-base lg:text-xl leading-[1.2] m-0 overflow-hidden'>
                  of customers say they reveal deeper insights from data
                </span>
              </div>
            </div>
          </div>

          <div>
            <section className='font-libre py-24 rounded-none bg-black text-slate-50 justify-center'>
              <div className='grid gap-y-0 gap-x-6 px-10 m-auto'>
                <div className='p-0 col-start-1 -col-end-1 mb-10 text-center'>
                  <section className='bg-transparent text-inherit overflow-hidden'>
                    <div className='gap-y-6 p-0 gap-x-6 grid m-auto'>
                      <div className='flex flex-col items-center col-start-1 -col-end-1 text-4xl leading-[1.1] lg:text-5xl lg:col-start-3 lg:-col-end-3 md:col-start-2 md:-col-end-2 text-center mb-2'>
                        <span className='block'>
                          Start getting to know your
                        </span>
                        <span className='block'>customers</span>
                      </div>
                      <div className='text-base leading-[1.2] font-normal m-0 overflow-hidden text-inherit col-start-1 -col-end-1 md:col-start-3 md:col-end-[-3] text-center'>
                        <div className='text-inherit'>
                          <p>
                            <strong>Our Free Plan lets you:</strong>
                          </p>
                          <ul className='my-2'>
                            <li>Create unlimited forms</li>
                            <li>Access 3,000+ templates</li>
                            <li>Start getting responses</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
                <div className='col-start-1 -col-end-1 md:justify-self-center'>
                  <div className='md:flex-row text-sm flex flex-col flex-wrap gap-6 content-center w-full xxs:w-auto items-center'>
                    <div className='flex-col inline-flex gap-4 max-w-full'>
                      <a
                        href='https://signup.com'
                        className='inline-block  cursor-pointer font-medium border-solid border-2 border-white text-black bg-white rounded-xl  py-2 px-10'
                      >
                        Sign Up
                      </a>
                    </div>
                    <div className='flex-col inline-flex gap-4 max-w-full underline'>
                      <a href='https:/plans.com'>Compare plans</a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <footer className='bg-black text-slate-50 font-apercupro shadow-none'>
            <h2 className='absolute h-0 w-0 p-0 overflow-hidden text-sm font-normal'>
              Footer area
            </h2>

            <div className='grid grid-cols-[repeat(4,1fr)] lg:grid-cols-[repeat(12,minmax(56px,64px))] md:grid-cols-[repeat(8,minmax(56px,64px))] xxs:grid-cols-[repeat(4,minmax(56px,64px))] py-20 px-8 gap-y-0 gap-x-6 justify-center'>
              <div className='grid lg:grid-cols-5 md:grid-cols-3 md:grid-rows-2 gap-y-16 gap-x-12 col-span-full'>
                <div className='flex-grow basis-0'>
                  <h3 className='uppercase font-bold text-base mx-0 mt-0 mb-8 '>
                    Product
                  </h3>
                  <div>
                    <a href='https://plans.com' className='mb-4 block'>
                      <span>Pricing</span>
                    </a>
                    <div>
                      <button className='flex border-none  p-0 text-inherit text-base  '>
                        <span className='flex items-center'>
                          Enterprise
                          <svg
                            width='9'
                            height='5'
                            viewBox='0 0 9 5'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                            className='ml-2'
                          >
                            <path
                              fill-rule='evenodd'
                              clip-rule='evenodd'
                              d='M4.26342 2.97603L2.24581 0.958417C1.6984 0.410996 0.81085 0.410997 0.263428 0.958418L4.26342 4.95841L8.26343 0.958418C7.71597 0.410997 6.82845 0.410997 6.28103 0.958418L4.26342 2.97603Z'
                              fill='currentColor'
                            ></path>
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className='flex-grow basis-0'>
                  <h3 className='uppercase font-bold text-base mx-0 mt-0 mb-8 '>
                    Templates
                  </h3>

                  <div>
                    <div>
                      <button className='flex border-none  p-0 text-inherit text-base flex-wrap w-full'>
                        <span className='flex items-center whitespace-nowrap mb-4'>
                          Popular Templates
                          <svg
                            width='9'
                            height='5'
                            viewBox='0 0 9 5'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                            className='ml-2'
                          >
                            <path
                              fill-rule='evenodd'
                              clip-rule='evenodd'
                              d='M4.26342 2.97603L2.24581 0.958417C1.6984 0.410996 0.81085 0.410997 0.263428 0.958418L4.26342 4.95841L8.26343 0.958418C7.71597 0.410997 6.82845 0.410997 6.28103 0.958418L4.26342 2.97603Z'
                              fill='currentColor'
                            ></path>
                          </svg>
                        </span>
                      </button>
                    </div>
                    <div>
                      <button className='flex border-none  p-0 text-inherit text-base flex-wrap w-full'>
                        <span className='flex items-center whitespace-nowrap mb-4'>
                          Recent Templates
                          <svg
                            width='9'
                            height='5'
                            viewBox='0 0 9 5'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                            className='ml-2'
                          >
                            <path
                              fill-rule='evenodd'
                              clip-rule='evenodd'
                              d='M4.26342 2.97603L2.24581 0.958417C1.6984 0.410996 0.81085 0.410997 0.263428 0.958418L4.26342 4.95841L8.26343 0.958418C7.71597 0.410997 6.82845 0.410997 6.28103 0.958418L4.26342 2.97603Z'
                              fill='currentColor'
                            ></path>
                          </svg>
                        </span>
                      </button>
                    </div>
                    <div>
                      <button className='flex border-none  p-0 text-inherit text-base flex-wrap w-full'>
                        <span className='flex items-center whitespace-nowrap mb-4'>
                          Popular categories
                          <svg
                            width='9'
                            height='5'
                            viewBox='0 0 9 5'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                            className='ml-2'
                          >
                            <path
                              fill-rule='evenodd'
                              clip-rule='evenodd'
                              d='M4.26342 2.97603L2.24581 0.958417C1.6984 0.410996 0.81085 0.410997 0.263428 0.958418L4.26342 4.95841L8.26343 0.958418C7.71597 0.410997 6.82845 0.410997 6.28103 0.958418L4.26342 2.97603Z'
                              fill='currentColor'
                            ></path>
                          </svg>
                        </span>
                      </button>
                    </div>
                    <div>
                      <button className='flex border-none  p-0 text-inherit text-base flex-wrap w-full'>
                        <span className='flex items-center whitespace-nowrap mb-4'>
                          Recent categories
                          <svg
                            width='9'
                            height='5'
                            viewBox='0 0 9 5'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                            className='ml-2'
                          >
                            <path
                              fill-rule='evenodd'
                              clip-rule='evenodd'
                              d='M4.26342 2.97603L2.24581 0.958417C1.6984 0.410996 0.81085 0.410997 0.263428 0.958418L4.26342 4.95841L8.26343 0.958418C7.71597 0.410997 6.82845 0.410997 6.28103 0.958418L4.26342 2.97603Z'
                              fill='currentColor'
                            ></path>
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className='flex-grow basis-0'>
                  <h3 className='uppercase font-bold text-base mx-0 mt-0 mb-8 '>
                    Integrations
                  </h3>

                  <div>
                    <div>
                      <button className='flex border-none  p-0 text-inherit text-base flex-wrap w-full'>
                        <span className='flex items-center whitespace-nowrap mb-4'>
                          Popular integration apps
                          <svg
                            width='9'
                            height='5'
                            viewBox='0 0 9 5'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                            className='ml-2'
                          >
                            <path
                              fill-rule='evenodd'
                              clip-rule='evenodd'
                              d='M4.26342 2.97603L2.24581 0.958417C1.6984 0.410996 0.81085 0.410997 0.263428 0.958418L4.26342 4.95841L8.26343 0.958418C7.71597 0.410997 6.82845 0.410997 6.28103 0.958418L4.26342 2.97603Z'
                              fill='currentColor'
                            ></path>
                          </svg>
                        </span>
                      </button>
                    </div>
                    <div>
                      <button className='flex border-none  p-0 text-inherit text-base flex-wrap w-full'>
                        <span className='flex items-center whitespace-nowrap mb-4'>
                          More integration apps
                          <svg
                            width='9'
                            height='5'
                            viewBox='0 0 9 5'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                            className='ml-2'
                          >
                            <path
                              fill-rule='evenodd'
                              clip-rule='evenodd'
                              d='M4.26342 2.97603L2.24581 0.958417C1.6984 0.410996 0.81085 0.410997 0.263428 0.958418L4.26342 4.95841L8.26343 0.958418C7.71597 0.410997 6.82845 0.410997 6.28103 0.958418L4.26342 2.97603Z'
                              fill='currentColor'
                            ></path>
                          </svg>
                        </span>
                      </button>
                    </div>
                    <div>
                      <button className='flex border-none  p-0 text-inherit text-base flex-wrap w-full'>
                        <span className='flex items-center whitespace-nowrap mb-4'>
                          Popular app categories
                          <svg
                            width='9'
                            height='5'
                            viewBox='0 0 9 5'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                            className='ml-2'
                          >
                            <path
                              fill-rule='evenodd'
                              clip-rule='evenodd'
                              d='M4.26342 2.97603L2.24581 0.958417C1.6984 0.410996 0.81085 0.410997 0.263428 0.958418L4.26342 4.95841L8.26343 0.958418C7.71597 0.410997 6.82845 0.410997 6.28103 0.958418L4.26342 2.97603Z'
                              fill='currentColor'
                            ></path>
                          </svg>
                        </span>
                      </button>
                    </div>
                    <div>
                      <button className='flex border-none  p-0 text-inherit text-base flex-wrap w-full'>
                        <span className='flex items-center whitespace-nowrap mb-4'>
                          More app categories
                          <svg
                            width='9'
                            height='5'
                            viewBox='0 0 9 5'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                            className='ml-2'
                          >
                            <path
                              fill-rule='evenodd'
                              clip-rule='evenodd'
                              d='M4.26342 2.97603L2.24581 0.958417C1.6984 0.410996 0.81085 0.410997 0.263428 0.958418L4.26342 4.95841L8.26343 0.958418C7.71597 0.410997 6.82845 0.410997 6.28103 0.958418L4.26342 2.97603Z'
                              fill='currentColor'
                            ></path>
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className='flex-grow basis-0'>
                  <h3 className='uppercase font-bold text-base mx-0 mt-0 mb-8 '>
                    Resources
                  </h3>
                  <div>
                    <a href='https:blog.com' className='mb-4 block'>
                      <span>Blog</span>
                    </a>
                    <a href='https://center.com' className='mb-4 block'>
                      <span>Help center</span>
                    </a>
                    <a href='https://community.com' className='mb-4 block'>
                      <span>Community</span>
                    </a>
                    <div>
                      <button className='flex border-none  p-0 text-inherit text-base flex-wrap w-full'>
                        <span className='flex items-center whitespace-nowrap mb-4'>
                          Why Tabsform
                          <svg
                            width='9'
                            height='5'
                            viewBox='0 0 9 5'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                            className='ml-2'
                          >
                            <path
                              fill-rule='evenodd'
                              clip-rule='evenodd'
                              d='M4.26342 2.97603L2.24581 0.958417C1.6984 0.410996 0.81085 0.410997 0.263428 0.958418L4.26342 4.95841L8.26343 0.958418C7.71597 0.410997 6.82845 0.410997 6.28103 0.958418L4.26342 2.97603Z'
                              fill='currentColor'
                            ></path>
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className='flex-grow basis-0'>
                  <h3 className='uppercase font-bold text-base mx-0 mt-0 mb-8 '>
                    Get to know us
                  </h3>
                  <div>
                    <a href='https://aboutus.com' className='mb-4 block'>
                      <span>About us</span>
                    </a>
                    <a href='https://brand.com' className='mb-4 block'>
                      <span>Brand</span>
                    </a>

                    <div>
                      <button className='flex border-none  p-0 text-inherit text-base flex-wrap w-full'>
                        <span className='flex items-center whitespace-nowrap mb-4'>
                          Terms and Conditions
                          <svg
                            width='9'
                            height='5'
                            viewBox='0 0 9 5'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                            className='ml-2'
                          >
                            <path
                              fill-rule='evenodd'
                              clip-rule='evenodd'
                              d='M4.26342 2.97603L2.24581 0.958417C1.6984 0.410996 0.81085 0.410997 0.263428 0.958418L4.26342 4.95841L8.26343 0.958418C7.71597 0.410997 6.82845 0.410997 6.28103 0.958418L4.26342 2.97603Z'
                              fill='currentColor'
                            ></path>
                          </svg>
                        </span>
                      </button>
                      <ul className='flex flex-wrap p-0 m-0 gap-y-2 gap-x-2'>
                        <a
                          href='https://www.facebook.com'
                          aria-label='Facebook'
                        >
                          <svg
                            width='20'
                            height='20'
                            viewBox='0 0 25 25'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              fill-rule='evenodd'
                              clip-rule='evenodd'
                              d='M0.294922 12.9245C0.294922 18.8909 4.65246 23.8518 10.3508 24.8574L10.4176 24.804C10.395 24.7996 10.3723 24.7952 10.3497 24.7906V16.2767H7.33296V12.9247H10.3497V10.2431C10.3497 7.22639 12.2939 5.55041 15.0425 5.55041C15.914 5.55041 16.8525 5.68449 17.724 5.81857V8.90237H16.1821C14.7073 8.90237 14.3721 9.6398 14.3721 10.5783V12.9247H17.59L17.0536 16.2767H14.3721V24.7906C14.35 24.795 14.328 24.7994 14.3059 24.8036L14.3731 24.8574C20.0715 23.8518 24.429 18.8909 24.429 12.9245C24.429 6.28759 18.9988 0.857422 12.362 0.857422C5.72509 0.857422 0.294922 6.28759 0.294922 12.9245Z'
                              fill='currentColor'
                            ></path>
                          </svg>
                        </a>
                        <a href='x.com' aria-label='Twitter'>
                          <svg
                            width='20'
                            height='20'
                            viewBox='0 0 25 25'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M14.5585 10.5858L23.6652 0H21.5072L13.5998 9.1915L7.28426 0H0L9.55038 13.8992L0 25H2.15812L10.5085 15.2935L17.1782 25H24.4624L14.5579 10.5858H14.5585ZM11.6026 14.0216L10.635 12.6376L2.93572 1.6246H6.25046L12.4639 10.5124L13.4315 11.8965L21.5082 23.4493H18.1934L11.6026 14.0222V14.0216Z'
                              fill='currentColor'
                            ></path>
                          </svg>
                        </a>
                        <a href='instagram.com' aria-label='Instagram'>
                          <svg
                            width='21 '
                            height='20'
                            viewBox='0 0 25 25'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M7.73427 0.941348C6.45746 1.00159 5.58553 1.20535 4.82328 1.50487C4.03439 1.81232 3.36575 2.22488 2.70046 2.89257C2.03517 3.56025 1.62549 4.22938 1.32021 5.01947C1.02476 5.7834 0.824602 6.65605 0.768202 7.93358C0.711801 9.21111 0.699321 9.62176 0.705561 12.8805C0.711801 16.1393 0.726201 16.5477 0.788122 17.8279C0.849082 19.1045 1.05212 19.9762 1.35165 20.7387C1.65957 21.5276 2.07165 22.196 2.73958 22.8615C3.40751 23.527 4.07615 23.9357 4.86816 24.2415C5.63137 24.5365 6.50426 24.7376 7.78155 24.7935C9.05885 24.8494 9.46997 24.8624 12.7278 24.8562C15.9856 24.8499 16.3957 24.8355 17.6757 24.7748C18.9556 24.7141 19.8227 24.5096 20.5854 24.2115C21.3743 23.9029 22.0432 23.4915 22.7083 22.8233C23.3733 22.1552 23.7828 21.4856 24.0878 20.695C24.3835 19.9318 24.5844 19.0589 24.6398 17.7826C24.6957 16.5017 24.7089 16.0927 24.7027 12.8344C24.6964 9.57616 24.6818 9.16767 24.6211 7.88798C24.5604 6.60829 24.3571 5.73924 24.0578 4.97627C23.7494 4.18738 23.3378 3.51945 22.6701 2.85345C22.0024 2.18744 21.3323 1.77824 20.542 1.47391C19.7783 1.17847 18.9059 0.977108 17.6286 0.921908C16.3513 0.866707 15.9402 0.852547 12.6812 0.858787C9.42221 0.865027 9.01421 0.878947 7.73427 0.941348ZM7.87443 22.6347C6.70442 22.5838 6.06914 22.3894 5.64577 22.2267C5.08512 22.0107 4.68576 21.7496 4.26384 21.3317C3.84191 20.9139 3.58271 20.5131 3.36383 19.9536C3.19943 19.5303 3.00142 18.8957 2.9467 17.7257C2.88718 16.4611 2.8747 16.0814 2.86774 12.8776C2.86078 9.67384 2.87302 9.29463 2.92846 8.02958C2.97838 6.86053 3.17399 6.22452 3.33647 5.8014C3.55247 5.24003 3.81263 4.84139 4.23144 4.4197C4.65024 3.99802 5.04984 3.73834 5.60977 3.51945C6.03265 3.35433 6.66722 3.15801 7.83675 3.10233C9.10229 3.04233 9.48149 3.03033 12.6848 3.02337C15.8881 3.01641 16.2683 3.02841 17.5343 3.08409C18.7033 3.13497 19.3396 3.32865 19.7622 3.49209C20.3231 3.7081 20.7222 3.96754 21.1439 4.38706C21.5656 4.80659 21.8255 5.20475 22.0444 5.76588C22.2098 6.18756 22.4061 6.82189 22.4613 7.99214C22.5215 9.25767 22.5352 9.63712 22.541 12.8402C22.5467 16.0433 22.5355 16.4237 22.48 17.6882C22.4289 18.8583 22.235 19.4938 22.072 19.9176C21.856 20.478 21.5956 20.8776 21.1766 21.2991C20.7575 21.7205 20.3584 21.9802 19.7982 22.1991C19.3758 22.364 18.7405 22.5608 17.572 22.6164C16.3064 22.676 15.9272 22.6884 12.7227 22.6954C9.51821 22.7024 9.14021 22.6894 7.87467 22.6347M17.6572 6.44388C17.6576 6.72871 17.7426 7.007 17.9012 7.24356C18.0599 7.48011 18.2851 7.66431 18.5484 7.77284C18.8118 7.88138 19.1014 7.90939 19.3806 7.85332C19.6599 7.79725 19.9163 7.65963 20.1173 7.45786C20.3183 7.25608 20.455 6.99922 20.5101 6.71977C20.5651 6.44031 20.536 6.1508 20.4265 5.88786C20.317 5.62493 20.132 5.40037 19.8949 5.24259C19.6577 5.08481 19.3791 5.0009 19.0943 5.00147C18.7125 5.00223 18.3466 5.15461 18.0771 5.42511C17.8076 5.6956 17.6565 6.06205 17.6572 6.44388ZM6.54266 12.8695C6.54938 16.2727 9.31325 19.0253 12.7158 19.0188C16.1183 19.0123 18.8728 16.2487 18.8663 12.8455C18.8598 9.44223 16.0952 6.68893 12.6922 6.69565C9.28925 6.70237 6.53618 9.46671 6.54266 12.8695ZM8.70412 12.8651C8.70256 12.074 8.93563 11.3002 9.37387 10.6415C9.8121 9.98279 10.4358 9.46885 11.1661 9.16464C11.8965 8.86044 12.7006 8.77963 13.4769 8.93244C14.2531 9.08525 14.9666 9.46481 15.5271 10.0231C16.0877 10.5814 16.4701 11.2934 16.6259 12.0691C16.7818 12.8447 16.7042 13.6492 16.4029 14.3807C16.1016 15.1122 15.5901 15.738 14.9332 16.1788C14.2762 16.6196 13.5033 16.8558 12.7122 16.8573C12.1868 16.8585 11.6664 16.7561 11.1807 16.556C10.695 16.356 10.2534 16.0622 9.88119 15.6915C9.50899 15.3208 9.21348 14.8804 9.01151 14.3954C8.80955 13.9105 8.7051 13.3905 8.70412 12.8651Z'
                              fill='currentColor'
                            ></path>
                          </svg>
                        </a>
                        <a href='youtube.com' aria-label='Youtube'>
                          <svg
                            width='20'
                            height='22'
                            viewBox='0 0 25 21'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              fill-rule='evenodd'
                              clip-rule='evenodd'
                              d='M22.2646 2.27445C23.3401 2.56188 24.187 3.40895 24.4745 4.48439C24.9967 6.43381 24.9967 10.501 24.9967 10.501C24.9967 10.501 24.9967 14.5683 24.4745 16.5176C24.187 17.593 23.3401 18.4401 22.2646 18.7275C20.3151 19.25 12.4984 19.25 12.4984 19.25C12.4984 19.25 4.68171 19.25 2.73228 18.7275C1.65686 18.4401 0.809784 17.593 0.52236 16.5176C0 14.5683 0 10.501 0 10.501C0 10.501 0 6.43381 0.52236 4.48439C0.809784 3.40895 1.65686 2.56188 2.73228 2.27445C4.68171 1.75208 12.4984 1.75208 12.4984 1.75208C12.4984 1.75208 20.3151 1.75208 22.2646 2.27445ZM9.99873 6.75146V14.2506L16.4929 10.5011L9.99873 6.75146Z'
                              fill='currentColor'
                            ></path>
                          </svg>
                        </a>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className='flex-grow basis-0 md:visible lg:hidden'>
                  <button className='underline mb-6 block transition-opacity text-inherit'>
                    Cookie settings
                  </button>
                  <a
                    href='https://cookie.com'
                    className='underline mb-6 block transition-opacity text-inherit'
                  >
                    Check our Cookie Policy to delete cookies
                  </a>
                  <a
                    href='https"//abuse.com'
                    className='underline mb-6 block transition-opacity text-inherit'
                  >
                    Report abuse
                  </a>

                  <div className='relative'>
                    <button className='flex border-none p-0 mb-6 text-inherit items-center'>
                      <div className='mr-2'>
                        <svg
                          height='17'
                          viewBox='0 0 20 20'
                          width='17'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zM9 17.9C5.1 17.4 2 14 2 10c0-.6.1-1.2.2-1.8L7 13v1c0 1.1.9 2 2 2v1.9zm6.9-2.5c-.3-.8-1-1.4-1.9-1.4h-1v-3c0-.6-.4-1-1-1H6V8h2c.6 0 1-.4 1-1V5h2c1.1 0 2-.9 2-2v-.4c2.9 1.2 5 4.1 5 7.4 0 2.1-.8 4-2.1 5.4z'
                            fill='currentColor'
                            fill-rule='evenodd'
                          ></path>
                        </svg>
                      </div>
                      <span>English</span>
                      <div className='ml-2'>
                        <svg
                          fill='none'
                          height='5'
                          viewBox='0 0 9 5'
                          width='9'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            clip-rule='evenodd'
                            d='M4.35156 2.80708L2.33394 0.789472C1.78653 0.24205 0.898985 0.242052 0.351563 0.789472L4.35156 4.78946L8.35156 0.789472C7.80411 0.242052 6.91658 0.242052 6.36917 0.789472L4.35156 2.80708Z'
                            fill='currentColor'
                            fill-rule='evenodd'
                          ></path>
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className='flex gap-y-0 gap-x-24 py-10 px-8 font-normal text-sm items-center border-t border-solid border-[#323232] justify-center'>
              <span className='inline-flex items-center'>
                <svg
                  fill='none'
                  height='17'
                  viewBox='0 0 12 17'
                  width='12'
                  xmlns='http://www.w3.org/2000/svg'
                  aria-hidden='true'
                  className='mr-2'
                >
                  <rect
                    height='14'
                    transform='translate(1.47412 1.32788)'
                    width='10'
                  ></rect>
                  <path
                    d='M6.47412 8.32788C7.57698 8.32788 8.47412 7.43045 8.47412 6.32788C8.47412 5.22531 7.57698 4.32788 6.47412 4.32788C5.37126 4.32788 4.47412 5.22531 4.47412 6.32788C4.47412 7.43045 5.37126 8.32788 6.47412 8.32788Z'
                    stroke='currentcolor'
                  ></path>
                  <path
                    d='M2.94498 2.75822C3.88798 1.83593 5.14134 1.32788 6.47461 1.32788C7.80788 1.32788 9.06124 1.83593 10.0042 2.75822C11.7624 4.47797 11.9789 7.71563 10.4614 9.69496L6.47461 15.3279L2.48147 9.68643C0.970354 7.71563 1.18714 4.47797 2.94498 2.75822Z'
                    stroke='currentcolor'
                  ></path>
                </svg>
                With love, from Lahore
              </span>

              <div className='hidden lg:block'>
                <div className='relative'>
                  <button className='flex border-none p-0 text-inherit items-center'>
                    <div className='mr-2'>
                      <svg
                        height='17'
                        viewBox='0 0 20 20'
                        width='17'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zM9 17.9C5.1 17.4 2 14 2 10c0-.6.1-1.2.2-1.8L7 13v1c0 1.1.9 2 2 2v1.9zm6.9-2.5c-.3-.8-1-1.4-1.9-1.4h-1v-3c0-.6-.4-1-1-1H6V8h2c.6 0 1-.4 1-1V5h2c1.1 0 2-.9 2-2v-.4c2.9 1.2 5 4.1 5 7.4 0 2.1-.8 4-2.1 5.4z'
                          fill='currentColor'
                          fill-rule='evenodd'
                        ></path>
                      </svg>
                    </div>
                    <span>English</span>
                    <div className='ml-2'>
                      <svg
                        fill='none'
                        height='5'
                        viewBox='0 0 9 5'
                        width='9'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          clip-rule='evenodd'
                          d='M4.35156 2.80708L2.33394 0.789472C1.78653 0.24205 0.898985 0.242052 0.351563 0.789472L4.35156 4.78946L8.35156 0.789472C7.80411 0.242052 6.91658 0.242052 6.36917 0.789472L4.35156 2.80708Z'
                          fill='currentColor'
                          fill-rule='evenodd'
                        ></path>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
              <div className='hidden lg:block'>
                <div className='flex  flex-row justify-center items-center gap-x-5 py-0 px-4'>
                  <button className='underline mb-0 block transition-opacity text-inherit'>
                    Cookie settings
                  </button>
                  <a
                    href='https://cookie.com'
                    className='underline mb-0 block transition-opacity text-inherit'
                  >
                    Check our Cookie Policy to delete cookies
                  </a>
                  <a
                    href='https"//abuse.com'
                    className='underline mb-0 block transition-opacity text-inherit'
                  >
                    Report abuse
                  </a>
                </div>
              </div>
              <span className='whitespace-nowrap'>© Tabs</span>
            </div>
          </footer>
        </main>
      </div>
    </>
  )
}

export default App
