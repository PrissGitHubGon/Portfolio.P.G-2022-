import React from "react";
import { Translate } from "react-localize-alias";

const Vinted = () => {
  return (
    <>
      <div className="w-full md:w-full lg:w-full flex justify-center sm:pb-80 md:mt-10">
        <div className="flex justify-center">
          <div className="flex flex-col md:flex-row md:max-w-3xl rounded-lg bg-white shadow-lg">
            <img
              className=" w-full h-96 md:h-auto object-cover md:w-56 rounded-t-lg md:rounded-none md:rounded-l-lg"
              src="https://res.cloudinary.com/dl6flp50k/image/upload/v1660146810/woman-1326707_960_720_mx191t.jpg"
              alt=""
            />
            <div className="p-6 flex flex-col justify-start">
              <h5 className="text-gray-900 text-4xl font-medium mb-4 text-center">
                Vinted
              </h5>
              <p className="text-gray-700 text-base mb-4">
                <Translate id="Vinted_text" />
              </p>
              <p className="text-gray-900 text-lg font-medium mb-2">
                <Translate id="Vinted_text1" />
              </p>

              <ol className="text-gray-700 text-base mb-4 ">
                <li className="list-disc">
                  <Translate id="Vinted_li1" />
                </li>{" "}
                <br />
                <li className="list-disc">
                  <Translate id="Vinted_li2" />
                </li>
                <br />
              </ol>
              <p className="text-gray-900 text-lg font-medium mb-2">
                <Translate id="Vinted_text2" />
              </p>

              <ol className="text-gray-700 text-base mb-4 ">
                <li className="list-disc">
                  <Translate id="Vinted_li3" />
                </li>{" "}
                <br />
                <li className="list-disc">
                  <Translate id="Vinted_li4" />
                </li>
                <br />
                <li className="list-disc pb-5 border-b-2">
                  <Translate id="Vinted_li5" />
                </li>
              </ol>

              <div className="flex flex-row justify-center space-x-14 pt-3">
                <a
                  href="https://github.com/PrissGitHubGon/Vinted-frontEnd"
                  className="text-white-800 text-2xl md:text-4xl"
                >
                  <i className="fa-brands fa-github ml-3 md:ml-1 "></i>
                  <p className="text-center text-sm">GitHub</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <a href="/marvel">
          <i className="fa-regular fa-hand-point-left text-4xl pl-5 bg-clip-text text-transparent bg-gradient-to-r from-red-900 via-orange-800 to-amber-700  hover:text-green-900 "></i>
          <p className="text-center pl-4 italic bg-clip-text text-transparent bg-gradient-to-r from-red-900 via-orange-800 to-amber-700 font-bold">
            Marvel
          </p>
        </a>
        <a href="/deliveroo">
          <i className="fa-regular fa-hand-point-right text-4xl pr-5 bg-clip-text text-transparent bg-gradient-to-r from-red-900 via-orange-800 to-amber-700  hover:text-green-900 "></i>
          <p className="text-center pr-6 italic bg-clip-text text-transparent bg-gradient-to-r from-red-900 via-orange-800 to-amber-700 font-bold ">
            Deliveroo
          </p>
        </a>
      </div>
    </>
  );
};

export default Vinted;
