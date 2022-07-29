import React from "react";
// import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import icon from "../assets/img/icon.png";

function Welcome() {
  return (
    <div className="w-screen h-screen bg-[url('https://res.cloudinary.com/dl6flp50k/image/upload/v1658925757/artificial-intelligence-2167835_960_720_ej6mys.webp')]  bg-cover bg-center flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        {/* <h1 className=" text-center text-4xl  font-extrabold text-white border-4 rounded-lg drop-shadow-lg flex bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          <Typewriter
            options={{
              strings: ["BIENVENUE SUR MON PORTFOLIO"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1> */}
        <div className="mt-8 px-6  flex flex-row justify-between bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:to-purple-700 text-xl text-white/70 font-semibold drop-shadow-lg rounded-full">
          <img src={icon} alt="" className="mr-2  h-16 w-20" />{" "}
          <a href="/home" className="pt-5 text-center">
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
}

export default Welcome;
