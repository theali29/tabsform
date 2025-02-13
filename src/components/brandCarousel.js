// marquee slider
import React from 'react'
import { useState, useEffect } from 'react'
import loewe from '../images/Loewe.svg'
import sugarcrm from '../images/sugarcrm.svg'
import klaviyo from '../images/Klaviyo.svg'
import cartier from '../images/Cartier.svg'
import airbnb from '../images/airbnb-logo.svg'

export default function BrandCarousel() {
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
      <section className='px-4 py-16 grid m-auto'>
        {/* Desktop View */}
        {!isMobile && (
          <section className='px-4 py-16 grid m-auto grid-cols-[repeat(4,1fr)] gap-4 xxs:gap-6 xxs:grid-cols-[repeat(8,1fr)] lg:grid-cols-[repeat(12,1fr)] lg:gap-6'>
            <div className='col-start-1 -col-end-1'>
              <div className='grid gap-y-0 gap-x-6 grid-cols-[repeat(4,1fr)] justify-center my-0 -mx-4 xxs:grid-cols-[repeat(4,minmax(56px, 64px))] md:grid-cols-[repeat(8,minmax(56px, 64px))]  md:max-md:overflow-hidden text-center lg:grid-cols-[repeat(12,minmax(56px, 64px))] xl:grid-cols-[repeat(12,64px)] xl:gap-y-0 xl:gap-x-8 '>
                <div className='col-start-1 -col-end-1 w-full gap-y-6 lg:px-16 lg:py-0 lg:justify-between md:flex md:flex-wrap  md:justify-center md:max-md:overflow-hidden'>
                  {logos.map((logo, idx) => (
                    <div key={idx} className='flex justify-center'>
                      <img src={logo.src} alt={logo.alt} className='mx-4' />
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
                  <img src={logo.src} alt={logo.alt} className='mx-auto w-24' />
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  )
}
