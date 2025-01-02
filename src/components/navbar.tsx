'use client'
import React from 'react'
import Link from "next/link"

const Navbar = () => (

  <header className="text-gray-600 body-font shadow-lg">
    <div className="container flex flex-wrap p-2 flex-col md:flex-row items-left">
      <span className="flex-1 text-2xl text-black font-semibold">Toobas_Dynamic_Blog</span>
      <nav className="md:ml-auto flex flex-wrap  items-center justify-center text-gray-900 hover:underline cursor-pointer ">
        <Link href={"/"} className="hover:text-blue-700 mr-10 transition-colors duration-300 transform hover:scale-105">Home</Link>
        <Link href={"/authorcard"} target="_blank" className="hover:text-blue-700 mr-10 transition-colors duration-300 transform hover:scale-105">About</Link>
        <Link href={"/mega"} target="_blank" className="hover:text-blue-700 mr-10 transition-colors duration-300 transform hover:scale-105">Blog</Link>
        <Link href={"/features"} target="_blank" className="hover:text-blue-700 mr-10 transition-colors duration-300 transform hover:scale-105">Our Services</Link>
        <Link href={"/contact"} target="_blank" className="hover:text-blue-700 mr-10 transition-colors duration-300 transform hover:scale-105">Contact</Link>
      </nav>
      <div>
        <button className="w-36 px-6 items-center inline-flex bg-blue-700 border-0 py-3 focus:outline-none hover:bg-blue-500 rounded text-white mt-4 md:mt-0 lg:ml-32 lg:px-3 lg:py-1">
          LinkedIn
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  </header>

)

export default Navbar