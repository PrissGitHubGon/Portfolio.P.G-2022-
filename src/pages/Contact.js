import React from "react";
import pdf from "../assets/doc/CV_Priscillia Gonçalves.pdf";
import Iframe from "react-iframe";
// import email from "../assets/img/email.jpg";
// import cv from "../assets/img/Screenshot_1.jpg";

function Contact() {
  return (
    <div className="ml-7 py-5 pb-10 flex flex-col sm:flex-row md:flex-col lg:flex-row xl:flex-row 2xl:flex-row   md:pb-64   md:place-items-center">
      {/* /******************************** Lotties cv ****************************/}
      <div className="sm:flex sm:flex-col sm:w-2/4 place-items-center">
        <Iframe
          url="https://embed.lottiefiles.com/animation/69761"
          id="myId"
          className="w-72 h-72 sm:w-96 sm:h-96   "
          display="initial"
          position="relative"
        />
        {/* <img src={cv} alt="" className="w-80 h-full sm:w-96   py-8" /> */}
        <a href={pdf} download className="">
          <button
            class="bg-blue-400 hover:bg-blue-500 text-gray-800 font-bold lg:py-2 lg:px-6 px-24 sm:px-10
             py-2 rounded inline-flex items-center 2xl:mt-5 2xl:ml-12"
          >
            <svg
              class="fill-current w-4 h-4 mr-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
            <span>Download CV</span>
          </button>
        </a>
      </div>{" "}
      {/* /******************************** Lotties Email ****************************/}
      <div className="sm:flex sm:flex-col w-2/4 place-items-center  ">
        <Iframe
          url="https://embed.lottiefiles.com/animation/68885"
          id="myId"
          className="w-72 h-72 sm:w-96 sm:h-96 "
          display="initial"
          position="relative"
        />
        {/* <img
          src={email}
          alt=""
          className="py-12 sm:w-4/5 md:w-3/5 md:mb-7 lg:w-full lg:mb-14"
        /> */}
        <div className="">
          <a href="mailto:priscillia.g.pro@outlook.fr">
            {" "}
            <button class="bg-violet-400 hover:bg-violet-500 text-gray-800 font-bold   rounded inline-flex items-center py-2 px-32 sm:px-14 ">
              <i class="fa-solid fa-envelope fill-current w-4 h-4 mr-2 "></i>
              <span>Email</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
