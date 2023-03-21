import React from "react";
import { Translate } from "react-localize-alias";

const Portfolio = () => {
  return (
    <div className="flex justify-center sm:pb-80 md:mt-10">
      <div className="flex flex-col md:flex-row md:max-w-4xl rounded-lg bg-white shadow-lg">
        <img
          className=" w-full h-96 md:h-auto object-cover md:w-56 rounded-t-lg md:rounded-none md:rounded-l-lg"
          src="https://res.cloudinary.com/dl6flp50k/image/upload/v1660153028/portefolio/portfolio_oyt4tq.jpg"
          alt=""
        />
        <div className="p-6 flex flex-col justify-start">
          <h5 className="text-gray-900 text-4xl font-medium mb-4 text-center">
            Portfolio
          </h5>
          <p className="text-gray-700 text-base mb-4">
            {" "}
            <Translate id="Portefolio_1" />
          </p>
          <p className="text-gray-700 text-base mb-4">
            <Translate id="Portefolio_2" />
          </p>

          <p className="text-gray-700 text-base mb-4">
            <Translate id="Portefolio_3" />
          </p>
          <h3 className="text-gray-900 text-lg font-medium mb-2">
            <Translate id="Portefolio_4" />
          </h3>
          <ol className="text-gray-700 text-base mb-4 ml-4">
            <li className="list-disc">
              {" "}
              React.js (<Translate id="Portefolio_5" />)
            </li>{" "}
            <br />
            <li className="list-disc">
              Tailwind Css | Font Awesome | bootstrap
            </li>
            <br />
            <li className="list-disc">Yarn </li>
            <br />
            <li className="list-disc">
              react-localize-alias <Translate id="Portefolio_6" />
            </li>
            <br />
            <li className="list-disc">
              "Responsive Viewer", <Translate id="Portefolio_7" />.
            </li>
          </ol>
          <div className="flex flex-row justify-center space-x-14 pt-5">
            <a
              href="https://github.com/PrissGitHubGon/Portfolio.P.G-2022-"
              className="text-white-800 text-2xl md:text-4xl"
            >
              <i className="fa-brands fa-github ml-3 md:ml-1 "></i>
              <p className="text-center text-sm">GitHub</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
