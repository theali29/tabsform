import React from 'react'
import { Link } from 'react-router-dom'
export default function Product() {
  return (
    <div className='bg-white pt-[120px]'>
      <div className='container mx-auto px-4 py-8 '>
        <div className='text-center col-start-1 -col-end-1 text-xl lg:col-start-3 lg:-col-end-3 md:col-start-2 md:-col-end-2 flex flex-col grid-rows-1 justify-center  items-center text-[rgb(25,25,25)] pt-4 '>
          <h1 className='text-5xl xl:text-[74px] xl:leading-[1] lg:leading-[1.1] lg:text-[64px] md:text-[48px] text-[rgb(25,25,25)]'>
            <span>
              Start with better forms.<br></br> End with better output.
            </span>
          </h1>
          <div className='text-center text-xl items-center text-[rgb(25,25,25)] pt-4 '>
            <p className='mt-8 font-normal text-none xl:text-xl xxs:text-base leading-[1.2]'>
              Whether you need customers, feedback, or something else, Tabsform
              helps you <br /> collect up to <strong>3.5x more data</strong>.
              Try for free.
            </p>
          </div>
          <div className='col-start-1 -col-end-1 md:justify-self-center my-10'>
            <div className='md:flex-row text-sm flex flex-col flex-wrap gap-6 content-center w-full xxs:w-auto items-center'>
              <div className='flex-col inline-flex gap-4 max-w-full'>
                <Link
                  to='/signup'
                  className='inline-block  cursor-pointer font-medium border-solid border-2 border-white text-black bg-white rounded-xl  py-2 px-10'
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
