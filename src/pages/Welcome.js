import React from "react";

import Typewriter from "typewriter-effect";

const Welcome = () => {
  return (
    <div className="w-screen h-screen bg-[url('https://res.cloudinary.com/dl6flp50k/image/upload/v1679222040/portefolio/background-2548758_960_720_emhyoy.jpg')]  bg-cover bg-center flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <div className=" px-6  flex flex-row justify-between  text-xl text-neutral-600 font-semibold drop-shadow-lg border-2 border-neutral-400 rounded">
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
