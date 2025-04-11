import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row pb-9 bg-slate-300">
        <div className="w-full md:w-1/2 md:mt-24 mt-10 md:order-2 order-1">
          <div className="">
            <h1 className="text-4xl font-bold text-blue-400">
              WARM WELCOME TO
              <span className="text-blue-900"> BHARATGO's</span> ECOMMERCE WEBSITE.
            </h1>
            <p className="text-xl text-slate-700 text-pretty pt-5 md:px-7">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
              similique laboriosam consequatur perspiciatis. Consectetur facilis
              adipisci molestias voluptates ut! Commodi iusto ratione quo? Ipsam
              et molestiae fugit corrupti, hic vero. adipisci molestias
              voluptates ut! Commodi iusto ratione quo? Ipsam et molestiae fugit
              corrupti, hic vero. adipisci molestias voluptates ut! Commodi
              iusto ratione quo? Ipsam et molestiae fugit corrupti, hic vero.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores ratione sunt eaque fugit a ipsa, quidem placeat nisi maxime voluptatibus, ab quasi. Vero aut quo modi, voluptatem eos ex harum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit odit minus veritatis repudiandae consectetur veniam eos exercitationem neque saepe non. Quia, corporis esse beatae architecto fugit dolorum cupiditate saepe consequuntur optio.Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
              <div className="rounded-md shadow">
                <Link
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-500 px-8 py-3 text-base font-medium text-white hover:bg-blue-500 hover:text-black md:py-4 md:px-10 md:text-lg"
                  to="/register"
                >
                  CREATE ACCOUNT 
                </Link>
              </div>
            </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="md:mt-24 m-5 mt-24 ">
            <img
              className="rounded-2xl"
              src="https://i.imgur.com/QkIa5tT.jpeg"
              alt="Pet's image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
