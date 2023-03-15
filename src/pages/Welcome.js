import React from "react";

import Typewriter from "typewriter-effect";

const Welcome = () => {
  return (
    <div className="w-screen h-screen bg-[url('https://res.cloudinary.com/dl6flp50k/image/upload/v1658925757/portefolio/artificial-intelligence-2167835_960_720_ej6mys.webp')]  bg-cover bg-center flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <div className=" px-6  flex flex-row justify-between bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:to-purple-700 text-xl text-white/70 font-semibold drop-shadow-lg rounded-full">
          <a href="/home" className="py-5 text-center">
            <Typewriter
              options={{
                strings: ["BIENVENUE SUR MON PORTFOLIO", "GET STARTED"],
                autoStart: true,
                loop: true,
              }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
