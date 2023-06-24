import React from 'react'

export default function Header() {
  return (
    <header className='h-[90vh] -z-20' id='Header'>
      <div className='my-container h-full flex justify-center items-center'>
        <div className="grid grid-cols-2">

          <div className='flex justify-end pe-8 '>
            <img className="rounded-full my-auto shadow-[0_0_25px_0_rgba(0,0,0,.4)] h-2/3 sm:h-3/4 md:h-auto md:max-w-1/2 lg:h-full lg:max-w-full" src={require("../image/header.jpg")} alt="this is me" />
          </div>

          <div>
            <span className=" text-black-color text-sm md:text-lg block">Web Designer</span>
            <h1 className="font-bold text-lg md:text-4xl my-4">Laeth Nueirat</h1>
            <p className="font-light text-black-color text-xs sm:text-sm md:text-lg">I am front-end designer, also known as a front-end developer or UI designer, is a professional responsible for designing and implementing the user interface of a website or application.I am skilled in using programming languages such as HTML, CSS, and JavaScript to create visually appealing and interactive interfaces. The primary focus of a front-end designer is to ensure that the user experience (UX) is seamless and enjoyable. </p>
            <div className="mt-5 gap-4 flex">
              <button className="text-[.5rem] px-0.5 py-0.5 sm:px-3 sm:py-1 sm:text-sm md:text-lg md:px-6 md:py-2.5  text-gray-900 hover:text-white border border-blue-600 hover:bg-blue-500 font-medium  text-center rounded-full duration-300">Download CV</button>
              <button className="text-[.5rem] px-0.5 py-0.5 sm:px-3 sm:py-1 sm:text-sm md:text-lg md:px-6 md:py-2.5  text-black-color hover:text-gray-700  border border-gray-300 hover:bg-gray-300 focus:ring-4 focus:outline-none  font-medium  text-center duration-300 rounded-full">Contact</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
