import React from 'react'
import { Link } from 'react-router-dom'
import BrandCarousel from '../components/brandCarousel'
import content from '../images/version1.png'
export default function Product() {
  return (
    <div className='bg-white pt-[120px]'>
      <div className='container mx-auto px-4 py-8'>
        <div>
          <div className='text-center col-start-1 -col-end-1 text-xl lg:col-start-3 lg:-col-end-3 md:col-start-2 md:-col-end-2 flex flex-col grid-rows-1 justify-center  items-center text-[rgb(25,25,25)] pt-4 mt-6 '>
            <h1 className='text-5xl xl:text-[68px] xl:leading-[1] lg:leading-[1.1] lg:text-[64px] md:text-[48px] text-[rgb(25,25,25)]'>
              <span>Choose one of our core plans</span>
            </h1>
            <div className='text-center text-xl items-center text-[rgb(25,25,25)] pt-4 '>
              <p className='mt-8 font-normal text-none xl:text-xl xxs:text-base leading-[1.2]'>
                Looking for advanced features? Check out our latest
                <strong className='underline'> Growth plans</strong>
                or get a taste with our{' '}
                <strong className='underline'>Free plan</strong>
              </p>
            </div>
          </div>
          <div className='col-start-1 -col-end-1 md:justify-self-center my-10'>
            <div className='md:flex-row text-sm flex flex-col flex-wrap gap-6 content-center w-full xxs:w-auto items-center'>
              <div className='flex-col inline-flex gap-4 max-w-full'>
                <Link
                  to='/signup'
                  className='inline-block  cursor-pointer font-medium border-solid border-2 border-black text-white bg-black rounded-xl  py-2 px-8'
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
        <BrandCarousel></BrandCarousel>
        <div class='container'>
          <div className='text-center text-[rgb(25,25,25)]'>
            <div>
              <h1 className='text-4xl xl:text-[56px] md:text-[42px] lg:text-[58px] '>
                <span>Build forms people fill out</span>
              </h1>
            </div>
            <div className='flex flex-col lg:grid lg:grid-cols-3 lg:gap-4 py-8 lg:px-4 justify-start items-start'>
              <div className='flex flex-col items-start w-full min-h-40'>
                <div className='pb-4'>
                  <img
                    width='376px'
                    height='376px'
                    className='object-cover w-full h-full'
                    src='https://cdn.prod.website-files.com/66ffe2174aa8e8d5661c2708/672cc46d5163d56a15e31965_PhotoBuild_forms_people_-2.webp'
                    alt='Img-cover'
                  />
                </div>
                <div className='flex flex-col flex-nowrap'>
                  <div className='flex-col flex-nowrap relative '>
                    <h1 className='text-xl font-semibold'>
                      <span>Ask questions naturally</span>
                    </h1>
                    <p className='text-base leading-6'>
                      Make form-filling feel effortless by replacing walls of
                      questions with just one at a time. By mirroring a real
                      conversation, you get more engagement.
                    </p>
                  </div>
                </div>
              </div>

              <div className='flex flex-col items-start w-full min-h-40'>
                <div className='pb-4'>
                  <img
                    width='376px'
                    height='376px'
                    className='object-cover w-full h-full'
                    src='https://cdn.prod.website-files.com/66ffe2174aa8e8d5661c2708/672cc46d5163d56a15e31965_PhotoBuild_forms_people_-2.webp'
                    alt='Img-cover'
                  />
                </div>
                <div className='flex flex-col flex-nowrap'>
                  <div className='flex-col flex-nowrap relative '>
                    <h1 className='text-xl font-semibold'>
                      <span>Match your brand</span>
                    </h1>
                    <p>
                      From logos to colors, upload your brand assets to
                      customize forms in a click. When they’re instantly
                      recognizable, people trust that it’s really you.
                    </p>
                  </div>
                </div>
              </div>

              <div className='flex flex-col items-start w-full min-h-40'>
                <div className='pb-4'>
                  <img
                    width='376px'
                    height='376px'
                    className='object-cover w-full h-full'
                    src='https://cdn.prod.website-files.com/66ffe2174aa8e8d5661c2708/672cc46d5163d56a15e31965_PhotoBuild_forms_people_-2.webp'
                    alt=''
                  />
                </div>
                <div className='flex flex-col flex-nowrap'>
                  <div className='flex-col flex-nowrap relative '>
                    <h1 className='text-xl font-semibold'>
                      <span>Adapt in real time</span>
                    </h1>
                    <p>
                      Treat everyone as individuals so they feel encouraged to
                      fill out your form. Call form takers by their name and ask
                      follow-up questions based on their answers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
