import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope,faPhone,faLink,faDownload} from '@fortawesome/free-solid-svg-icons'

export default function Contact() {
  return (
    <section className='my-32' id='Contact'>
        <div className='my-container text-black-color'>
            <h2 className='text-center relative w-full text-lg sm:text-3xl lg:text-6xl mt-4 font-extrabold'>GET IN<span className='text-main-color'>TOUCH</span><span className='absolute left-0 right-0 text-5xl top-[-.8rem] sm:text-7xl sm:top-[-1.4rem] lg:top-[-2.5rem] lg:text-9xl text-center z-[-1] opacity-10'>CONTACT</span></h2>
            <div className='grid md:grid-cols-2 mt-16'>
                <div className='px-8 mb-6 md:mb-0'>
                    <h3 className='font-bold text-2xl'>DON'T BE SHY !</h3>
                    <p className='my-5'>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                    <div  className='flex flex-row gap-4'>
                        <FontAwesomeIcon icon={faLink} style={{width:'35px',height:'35px',color:'#007ced'}} />
                        <div className='flex flex-col'>
                            <span>Linkedin</span>
                            <span className='text-gray-color font-semibold'>www.linkedin.com/in/laeth-nueirat-16a78b268</span>
                        </div>
                    </div>
                    <div className='flex flex-row gap-4 my-6'>
                        <FontAwesomeIcon icon={faEnvelope} style={{width:'35px',height:'35px',color:'#007ced'}} />
                        <div className='flex flex-col'>
                            <span>MAIL ME</span>
                            <span className='text-gray-color font-semibold'>laethraed0@gmail.com</span>
                        </div>
                    </div>
                    <div className='flex flex-row gap-4'>
                    <FontAwesomeIcon icon={faPhone} style={{width:'35px',height:'35px',color:'#007ced'}} />
                        <div className='flex flex-col'>
                            <span>CALL ME</span>
                            <span className='text-gray-color font-semibold'>0569768777</span>
                        </div>
                    </div>
                </div>
                <form >
                    <div className="grid gap-6 mb-6 grid-cols-2">
                        <input type="text" className="border border-gray-300 text-gray-color text-sm rounded-lg duration-700 focus:border-main-color block w-full p-2.5 " placeholder="YOUR NAME"  />
                        <input type="text" className="border border-gray-300 text-gray-color text-sm rounded-lg duration-700 focus:border-main-color block w-full p-2.5 " placeholder="YOUR EMAIL"  />
                    </div>
                    <input type="email" className="border border-gray-300 text-gray-color text-sm rounded-lg duration-700 focus:border-main-color block w-full p-2.5 " placeholder="YOUR SUBJECT"  />
                    <textarea  rows="5" class="my-6 block p-2.5 w-full text-sm text-gray-color rounded-lg border border-gray-300 duration-700 focus:border-main-color" placeholder="YOUR MESSAGE"></textarea>
                    <button className='flex w-2/5 h-10 justify-between hover:text-white overflow-hidden relative items-center border border-main-color rounded-full before:z-[-1] before:bg-main-color before:rounded-full before:absolute before:inset-0 before:translate-x-full before:hover:translate-x-0  before:transition-all before:ease-out before:duration-300 '>
                        <p className='w-3/5 text-xs sm:text-base md:text-[.8rem] lg:text-[1rem] xl:text-lg text-right'>send message</p>
                        <div className='bg-main-color w-1/3 h-full rounded-full flex justify-center items-center '>
                            <FontAwesomeIcon icon={faDownload} style={{color: "#ffffff",height:"50%"}} />
                        </div>
                    </button>
                </form>
            </div>
        </div>{/* end container */}
    </section>
)
}
