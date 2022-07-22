import React from "react";
import pdf from "../assets/doc/CV_Priscillia Gonçalves.pdf";
import Iframe from "react-iframe";

function Contact() {
  return (
    <main className=" w-full md:w-full lg:w-full  ">
      <div className="w-full flex flex-col md:flex-col lg:flex-col xl:flex-row 2xl:flex-row">
        {/* /******************************** Lotties cv ****************************/}
        <div className=" px-5 py-40 xl:py-40 sm:ml-40 sm:flex sm:flex-col md:py-10  md:w-2/3 lg:w-4/4  lg:ml-68 ">
          <Iframe
            url="https://embed.lottiefiles.com/animation/69761"
            id="myId"
            className="lottieCv  lg:ml-50 "
            display="initial"
            position="relative"
          />

          <a href={pdf} download className="w-full  md:w-1/3 lg:w-2/4 lg:ml-20">
            <button
              class="bg-blue-400 hover:bg-blue-500 text-gray-800 font-bold lg:py-2 lg:px-6 px-24 
             py-2 rounded inline-flex items-center"
            >
              <svg
                class="fill-current w-4 h-4 mr-2"
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
        <div className=" md:w-2/3 lg:w-3/4 px-5 pb-40 xl:py-40 md:py-10 sm:ml-40 ">
          <Iframe
            url="https://embed.lottiefiles.com/animation/68885"
            id="myId"
            className="lottieCv lg:ml-32 "
            display="initial"
            position="relative"
          />
          <div className="lg:ml-56 ">
            <a href="mailto:priscillia.g.pro@outlook.fr">
              {" "}
              <button class="bg-violet-400 hover:bg-violet-500 text-gray-800 font-bold lg:py-2 lg:px-4 px-32 py-2 rounded inline-flex items-center">
                <i class="fa-solid fa-envelope fill-current w-4 h-4 mr-2"></i>
                <span>Email</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;
