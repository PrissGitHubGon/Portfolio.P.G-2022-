import React from "react";
import pdf from "../assets/doc/CV_Priscillia Gonçalves.pdf";
import Iframe from "react-iframe";

function Contact() {
  return (
    <div className="ml-8 pb-10 sm:ml-24 flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row md:py-60 lg:py-36 2xl:py-48 lg:ml-60 xl:ml-58 2xl:pl-28">
      {/* /******************************** Lotties cv ****************************/}
      <div className="sm:flex sm:flex-col lg:mr-24 xl:mr-60 xl:pl-20 sm:mr-11">
        <Iframe
          url="https://embed.lottiefiles.com/animation/69761"
          id="myId"
          className="w-72 h-72 sm:w-52 sm:h-52 2xl:w-72  "
          display="initial"
          position="relative"
        />

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
      <div className="sm:ml-16">
        <Iframe
          url="https://embed.lottiefiles.com/animation/68885"
          id="myId"
          className="w-72 h-72 sm:w-52 sm:h-52 2xl:w-72"
          display="initial"
          position="relative"
        />
        <div className="">
          <a href="mailto:priscillia.g.pro@outlook.fr">
            {" "}
            <button class="bg-violet-400 hover:bg-violet-500 text-gray-800 font-bold lg:py-2  lg:px-11 xl:px-10 px-32 py-2 rounded inline-flex items-center sm:px-10 sm:ml-8 2xl:mt-5 2xl:ml-16 2xl:px-14">
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
