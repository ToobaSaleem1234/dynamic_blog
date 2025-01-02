import React from 'react'
import Image from 'next/image'


const Authorcard = () => {
  return (
    <div className='bg-white shadow-lg rounded-lg px-16 py-6 mt-12'>
      <div className='flex items-center animation-fadeIn'>
        <Image className='w-52 h-52 rounded-full mr-4 object-cover border-2 border-blue-800'
          alt='author'
          width={100}
          height={100}
          src='/author/tooba.jpg'
        ></Image>
        <div className='flex flex-col'>
          <h1 className='text-2xl font-bold'>Tooba Saleem Ahmed</h1>
          <p className='text-slate-500 text-lg'> Web Develpor | Graphics Designer </p>
        </div>
      </div>
      <p className='mt-4 text-black leading-relaxed text-justify'>
        Hi, I am <span>Tooba Saleem</span>, a student of GIAIC and a future passionate developor with 2 years of experience in IT.My exprties lies in HTML,Custom CSS,Tailwind CSS,Typescript UI/UX Design for web Development.
      </p>
      <p className='mt-4 text-black leading-relaxed text-justify'>
        I believe in blending different creativity with functionality to deliever meaningful results.Every project I made with so much effort and hardworking.These all projects are the the part of my learning journey.Every project i work on is a chance to push boundaries and explore innovative solutions.
      </p>
      <div className='mt-4 flex space-x-3'>
        <a href="https://www.facebook.com/tooba.saleem.739?mibextid=ZbWKwL" target='_blank' className='px-6 py-3 text-white  bg-blue-700 rounded-md hover:bg-blue-500 transition duration-300'>
          Facebook
        </a>
        <a href="https://github.com/ToobaSaleem1234" target='_blank' className='px-6 py-3 text-white bg-blue-700 rounded-md hover:bg-blue-500 transition duration-300'>
          Github
        </a>
        <a href="https://www.linkedin.com/in/tooba-saleem-043b972b4/" target='_blank' className='px-6 py-3 text-white bg-blue-700 rounded-md hover:bg-blue-500 transition duration-300'>
          LinkedIn
        </a>

      </div>
    </div>
  )
}

export default Authorcard