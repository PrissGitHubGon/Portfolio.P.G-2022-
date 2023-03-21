import React from "react";
import { Translate } from "react-localize-alias";
import Typewriter from "typewriter-effect";
import translations from "../Translate";

const Home = () => {
  return (
    <>
      <main className="  ">
        <div className=" flex flex-col py-16  lg:flex-row  ">
          <div className=" lg:w-2/4  ml-22 pb-5 ">
            <img
              src="https://res.cloudinary.com/dl6flp50k/image/upload/v1659365893/portefolio/me_c0bgw0.png"
              alt=""
              className="picture "
            />
          </div>

          <div className=" lg:w-2/4 pl-3 pr-3 pb-5  2xl:w-3/4">
            <h1 className="text-xl sm:px-12  md:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-800 via-purple-800 to-pink-800 ">
              {translations === "fr" ? (
                <Typewriter
                  options={{
                    strings: [
                      "Bonjour, Je m'appelle Priscillia Gonçalves",
                      "J'ai 32 ans.",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              ) : (
                <Typewriter
                  options={{
                    strings: [
                      "Hello, my name is Priscillia Gonçalves",
                      "I am 32 years old.",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              )}
            </h1>
            <br />

            <p className="text-black text-base lg:px-12 sm:text-lg  md:text-2xl ">
              <Translate id="Presentation1" />
              <br />
              <br />
              <Translate id="Presentation2" />
              <br />
              <br />
              <Translate id="Presentation3" />
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
