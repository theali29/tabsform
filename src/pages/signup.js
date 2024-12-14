import React from 'react'
import Layout from '../components/Layout'
import video from '../video/trailer1.mp4'

export default function SignUp() {
  return (
    <div className='min-w-screen max-w-full overflow-x-hidden'>
      <main className='w-screen overflow-x-hidden'>
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
                <strong> understand customers</strong> with forms designed to be
                refreshingly different.
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
      </main>
    </div>
  )
}
