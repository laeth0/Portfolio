import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <section id="About">
      <div className="my-container text-black-color">
        <h2 className="uppercase text-center relative w-full mt-4 text-2xl font-bold sm:text-4xl lg:font-extrabold lg:text-6xl">
          About<span className="text-main-color">me</span>
          <span className="absolute left-0 right-0 text-6xl top-[-1rem] sm:text-7xl sm:top-[-1.3rem]  lg:top-[-2.5rem] lg:text-9xl text-center z-[-1] opacity-10 ">
            RESUME
          </span>
        </h2>
        <div className="grid md:grid-cols-2 mt-16">
          <div className="text-left my-4">
            <h3 className="font-bold text-sm md:text-lg lg:text-2xl">
              PERSONAL INFOS
            </h3>
            <div className="grid grid-cols-2 text-xs sm:text-base lg:text-lg lg:my-6">
              <ul>
                <li className="my-4">
                  <span className="opacity-80 ">First Name:</span>
                  <span className="font-semibold">laeth</span>
                </li>
                <li className="my-4">
                  <span className="opacity-80">Age:</span>
                  <span className="font-semibold">21 Years</span>
                </li>
                <li className="my-4">
                  <span className="opacity-80">Freelance: </span>
                  <span className="font-semibold text-green-500">
                    Available
                  </span>
                </li>
                <li className="my-4">
                  <span className="opacity-80">Phone:</span>
                  <span className="font-semibold">0569768777</span>
                </li>
                <li className="my-4">
                  <span className="opacity-80">Langages:</span>
                  <span className="font-semibold">English , Arabic</span>
                </li>
              </ul>
              <ul>
                <li className="my-4">
                  <span className="opacity-80 ">Last Name: </span>
                  <span className="font-semibold">nueirat</span>
                </li>
                <li className="my-4">
                  <span className="opacity-80">Nationality:</span>
                  <span className="font-semibold">palestinian</span>
                </li>
                <li className="my-4">
                  <span className="opacity-80">Address: </span>
                  <span className="font-semibold">jenin maithaloon</span>
                </li>
                <li className="my-4">
                  <span className="opacity-80">Email:</span>
                  <span className="font-semibold">laethraed0@gmail.com</span>
                </li>
                <li className="my-4">
                  <span className="opacity-80">Githup:</span>
                  <span className="font-semibold">github.com/laeth0</span>
                </li>
              </ul>
            </div>

            <button className="flex w-2/5 h-6 lg:h-10 justify-between hover:text-white overflow-hidden relative items-center border border-main-color rounded-full before:z-[-1] before:bg-main-color before:rounded-full before:absolute before:inset-0 before:translate-x-full before:hover:translate-x-0  before:transition-all before:ease-out before:duration-300 ">
              <p className="w-2/3 text-[.5rem] sm:text-sm md:text-[.8rem] lg:text-base text-center">
                DAWNLOAD CV
              </p>
              <div className="bg-main-color w-1/3 h-full rounded-full flex justify-center items-center ">
                <FontAwesomeIcon
                  icon={faDownload}
                  style={{ color: "#ffffff", height: "50%" }}
                />
              </div>
            </button>
          </div>
          <div className="grid grid-cols-2 gap-5 px-10">
            <div className=" border-[2px] border-solid rounded-md">
              <p className="h-1/2 text-4xl text-main-color font-bold">
                <span className="w-3/5 h-full mx-auto block text-start">
                  1<span className="align-super">+</span>
                </span>
              </p>
              <p className="h-1/2 flex justify-center items-start flex-wrap">
                YEARS OF<br></br>EXPERIENCE
              </p>
            </div>
            <div className=" border-[2px] border-solid rounded-md">
              <p className="h-1/2 text-4xl text-main-color font-bold">
                <span className="w-3/5 h-full mx-auto block text-start">
                  5<span className="align-super">+</span>
                </span>
              </p>
              <p className="h-1/2 flex justify-center items-start flex-wrap">
                COMPLETED<br></br>PROJECTS
              </p>
            </div>
            <div className=" border-[2px] border-solid rounded-md">
              <p className="h-1/2 text-4xl text-main-color font-bold">
                <span className="w-3/5 h-full mx-auto block text-start">
                  1<span className="align-super">+</span>
                </span>
              </p>
              <p className="h-1/2 flex justify-center items-start flex-wrap">
                HAPPY<br></br>CUSTOMERS
              </p>
            </div>
            <div className=" border-[2px] border-solid rounded-md">
              <p className="h-1/2 text-4xl text-main-color font-bold">
                <span className="w-3/5 h-full mx-auto block text-start">
                  1<span className="align-super">+</span>
                </span>
              </p>
              <p className="h-1/2 flex justify-center items-start flex-wrap">
                AWARDS<br></br>WON
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
