import React from "react";

function Portfolio() {
  return (
    <div className="flex justify-center sm:pb-80 md:mt-10">
      <div className="flex flex-col md:flex-row md:max-w-4xl rounded-lg bg-white shadow-lg">
        <img
          className=" w-full h-96 md:h-auto object-cover md:w-56 rounded-t-lg md:rounded-none md:rounded-l-lg"
          src="https://res.cloudinary.com/dl6flp50k/image/upload/v1660153028/portfolio_oyt4tq.jpg"
          alt=""
        />
        <div className="p-6 flex flex-col justify-start">
          <h5 className="text-gray-900 text-4xl font-medium mb-4 text-center">
            Portfolio
          </h5>
          <p className="text-gray-700 text-base mb-4">En cours..</p>
          <p className="text-gray-900 text-lg font-medium mb-2">En cours..</p>

          <ol className="text-gray-700 text-base mb-4 ">
            <li className="list-disc"> En cours.. </li> <br />
            <li className="list-disc">En cours..</li>
            <br />
            <li className="list-disc">En cours..</li>
          </ol>
          <h3 className="text-gray-900 text-lg font-medium mb-2">En cours..</h3>
          <p className="text-gray-700 text-base pb-4 border-b-2">En cours..</p>
          <div className="flex flex-row justify-center space-x-14 pt-5">
            <a href="" className="text-white-800 text-2xl md:text-4xl">
              <i className="fa-brands fa-github ml-3 md:ml-1 "></i>
              <p className="text-center text-sm">En cours..</p>
            </a>

            <a href="" className="text-white-800 text-2xl md:text-4xl">
              <i className="fa-brands fa-internet-explorer ml-7 md:ml-5"></i>
              <p className="text-center text-sm">En cours..</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
