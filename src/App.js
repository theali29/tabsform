import './App.css'

import video from './video/trailer1.mp4'
import airbnb from './images/airbnb-logo.svg'
import loewe from './images/Loewe.svg'
import sugarcrm from './images/sugarcrm.svg'
import klaviyo from './images/Klaviyo.svg'
import cartier from './images/Cartier.svg'
import image from './images/image2.png'
import { BrowserRouter } from 'react-router-dom'
import Product from './pages/product.js'

import React, { useEffect, useState } from 'react'
import Layout from './components/Layout.js'
function App() {
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
      <BrowserRouter>
        <div className='min-w-screen max-w-full overflow-x-hidden'>
          <main className='w-screen overflow-x-hidden'>
            <Layout>
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
                                Chase Clark, Senior UX Researcher at Calm,
                                explains why they switched to Tabsform.
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
                <div className='ml-auto mr-auto w-full max-width-[1600px] px-5 md:px-5 lg:px-9 flex text-balance justify-center '>
                  <div className='relative max-w-3xl space-y-5 text-center'>
                    <div className='!*:opacity-100'>
                      <div
                        className='prose text-white'
                        data-sentry-component='RichText'
                        data-sentry-source-file='RichText.tsx'
                      >
                        <h2 className=' font-libre h2-large  text-4xl font-medium my-5 leading-[1em] tracking-tighter'>
                          Master every form you see
                        </h2>
                        <p>
                          Close the gap between where you are and how you want
                          to use forms.
                        </p>
                      </div>
                      <div className='col-start-1 -col-end-1 md:justify-self-center my-10'>
                        <div className='md:flex-row text-sm flex flex-col flex-wrap gap-6 content-center w-full xxs:w-auto items-center'>
                          <div className='flex-col inline-flex gap-4 max-w-full'>
                            <a
                              href='https://signup.com'
                              className='inline-block  cursor-pointer font-medium border-solid border-2 border-white text-black bg-white rounded-xl  py-2 px-10'
                            >
                              Sign Up
                            </a>
                          </div>
                        </div>
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
            </Layout>
          </main>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
