import React from "react";
import { Translate } from "react-localize-alias";
import DirectionalArrow from "../../../components/components/Directional_arrow";

const PokemonV1 = () => {
  return (
    <>
      <div className="w-full md:w-full lg:w-full flex justify-center sm:pb-80 md:mt-10">
        <div className="flex justify-center">
          <div className="flex flex-col md:flex-row md:max-w-3xl rounded-lg bg-white shadow-lg">
            <img
              className=" w-full h-96 md:h-auto object-cover md:w-56 rounded-t-lg md:rounded-none md:rounded-l-lg"
              src="https://res.cloudinary.com/dl6flp50k/image/upload/v1681318464/pokemon/chrome_UZf0qGCCCP_yvlwo1.gif"
              alt=""
            />
            <div className="p-6 flex flex-col justify-start">
              <h5 className="text-gray-900 text-4xl font-medium mb-4 text-center">
                Pokemon - Version 1
              </h5>
              <p className="text-gray-700 text-base mb-4">
                <Translate id="Pokemon_text" />
              </p>

              <div className="flex flex-row justify-center space-x-14 pt-3">
                <a
                  href="https://github.com/PrissGitHubGon/pokemon_v1"
                  className="text-white-800 text-2xl md:text-4xl"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-github ml-3 md:ml-1 "></i>
                  <p className="text-center text-sm">GitHub</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DirectionalArrow rightLink="/deliveroo" rightTitle="Deliveroo" />
    </>
  );
};

export default PokemonV1;
