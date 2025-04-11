import React from "react";

const AboutUs = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 bg-slate-200 text-black">
        <div className="sm:flex items-center max-w-screen-xl pt-20 md:h-screen">
          <div className="sm:w-1/2 p-10">
            <div className="image object-center text-center">
              <img src="https://i.imgur.com/WbQnbas.png" />
            </div>
          </div>
          <div className="sm:w-1/2 p-5">
            <div className="text">
              <span className="text-blue-500 border-b-2 border-pink-500 uppercase">
                About us
              </span>
              <h2 className="my-4 font-bold text-3xl  sm:text-4xl text-blue-500">
                About <span className="text-black">Our Company</span>
              </h2>
              <p className="text-2xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid, commodi doloremque, fugiat illum magni minus nisi nulla
                numquam obcaecati placeat quia, repellat tempore voluptatum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
