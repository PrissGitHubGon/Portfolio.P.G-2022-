import React from "react";
// import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
function Welcome() {
  return (
    <div className="w-screen h-screen bg-[url('https://res.cloudinary.com/dl6flp50k/image/upload/v1658925757/artificial-intelligence-2167835_960_720_ej6mys.webp')]  bg-cover bg-center flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <h1 className=" text-center text-4xl  font-extrabold text-white border-4 rounded-lg drop-shadow-lg flex bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          <Typewriter
            options={{
              strings: [
                "BIENVENUE SUR MON PORTFOLIO",
                "JE M'APPELLE PRISCILLIA GONCALVES",
                "JE SUIS UNE DÉVELOPPEUSE REACTJS JUNIOR",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>

        <a
          className="mt-8 px-12 py-3  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:to-purple-700 text-xl text-white/70 font-semibold drop-shadow-lg rounded-full border-4"
          href="/home"
        >
          Get Started
        </a>
      </div>
    </div>
  );
}

export default Welcome;
