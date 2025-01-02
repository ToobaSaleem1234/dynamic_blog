import React from 'react'

export const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <span className="text-xl font-bold">Toobas_Dyanamic_Blog</span>
          </div>
          <p className="mt-2 text-gray-500 leading-relaxed text-justify text-md">
            All the courses you want to learn in one platform is here...
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-semibold text-black tracking-widest text-md mb-3">
              SUPPORT
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">Contact Us</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">FAQ</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Help Center</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Resource Library</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-semibold text-black tracking-widest text-md mb-3">
              ACCOUNT
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">Login</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Register</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">My courses</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Logout</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-semibold text-black tracking-widest text-md mb-3">
              QUICK LINKS
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">Privacy Policy</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Terms and Conditions</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">FAQs</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Blog</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-semibold text-black tracking-widest text-md mb-3">
              SOCIAL LINKS
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">Facebook</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Github</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">LinkedIn</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Vercel</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
          <p className="mx-auto py-4 px-5 flex items-center justify-center text-gray-500 text-md sm:text-left ">
            © 2025... Toobas_Dynamic_Blog..
          </p>
        </div>
    </footer>

  )
}
