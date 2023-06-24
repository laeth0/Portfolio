import React from 'react'

export default function Navbar() {
  return (
  <nav className='h-[10vh]'>
    <div className='my-container h-full'>
      <div className="flex flex-wrap items-center justify-between h-full">

        <div className="flex items-center h-full">
            <img className='rounded-full block w-16 h-16'  src={require("../image/logo.jpg")} alt="my logo" />
        </div>
        
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul className="font-medium  flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row  md:p-0 md:space-x-8 md:mt-0 md:border-0 ">
          <li>
            <a href='#Header' className="block py-2 pl-3 pr-4 text-white bg-main-color rounded md:bg-transparent md:text-main-color md:p-0" aria-current="page">Home</a>
          </li>
          <li>
            <a href='#About' className="block py-2 pl-3 pr-4 text-gray-color rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-main-color md:p-0">About</a>
          </li>
          <li>
            <a href='#Skills' className="block py-2 pl-3 pr-4 text-gray-color rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-main-color md:p-0">Skills</a>
          </li>
          <li>
            <a href='#Contact' className="block py-2 pl-3 pr-4 text-gray-color rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-main-color md:p-0">Contact</a>
          </li>
        </ul>
      </div>

      </div>
    </div>
  </nav>
  )
}
