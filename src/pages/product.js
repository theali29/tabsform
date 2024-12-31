import React from 'react'

export default function Product() {
  return (
    <div className='bg-white pt-[120px]'>
      <div className='container mx-auto px-4 py-8 '>
        <div className='text-center col-start-1 -col-end-1 text-xl lg:col-start-3 lg:-col-end-3 md:col-start-2 md:-col-end-2 flex flex-col grid-rows-1 justify-center  items-center text-[rgb(25,25,25)] pt-4 '>
          <h1 className='text-5xl lg:text-[64px] md:text-[48px] text-[rgb(25,25,25)]'>
            <span>Start with better forms. End with better output.</span>
          </h1>
          <div className='text-center text-xl items-center text-[rgb(25,25,25)] pt-4 '>
            <p className='mt-8 font-normal text-none text-xl leading-[1.2]'>
              Whether you need customers, feedback, or something else, Tabsform
              helps you collect up to <strong>3.5x more data</strong> Try for
              free.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
