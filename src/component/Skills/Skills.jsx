import React from 'react'

export default function Skills() {
  return (
    <section className="mt-16" id='Skills'>
        <div className='my-container'>
            <div className="grid grid-cols-2">
                <div className="flex justify-center">
                <img src={require("../image/skills.jpg")} className="w-2/3 rounded-full" alt='me again'/> 
                </div>
                <div className='grid content-center'>
                    <h3 className="font-medium text-2xl">Coding Skills</h3>

                    <div className="mt-4">
                        <div className="flex justify-between mb-1">
                            <span className="text-base font-medium text-main-color">HTML</span>
                            <span className="text-sm font-medium text-main-color">80%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-main-color h-2 rounded-full w-4/5"  />
                        </div>

                        <div className="flex justify-between mb-1">
                            <span className="text-base font-medium text-main-color">CSS</span>
                            <span className="text-sm font-medium text-main-color">75%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-main-color h-2 rounded-full w-3/4"  />
                        </div>

                        <div className="flex justify-between mb-1">
                            <span className="text-base font-medium text-main-color">JavaScript</span>
                            <span className="text-sm font-medium text-main-color">90%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-main-color h-2 rounded-full w-11/12"  />
                        </div>

                        <div className="flex justify-between mb-1">
                            <span className="text-base font-medium text-main-color">React Js</span>
                            <span className="text-sm font-medium text-main-color">66%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-main-color h-2 rounded-full w-8/12"  />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
)
}
