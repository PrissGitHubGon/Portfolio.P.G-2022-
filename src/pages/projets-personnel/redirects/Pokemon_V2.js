import React from "react";

import DirectionalArrow from "../../../components/components/Directional_arrow";
import { Translate } from "react-localize-alias";

const PokemonV2 = () => {
  return (
    <>
      <div className="w-full md:w-full lg:w-full flex justify-center sm:pb-80 md:mt-10">
        <div className="flex justify-center">
          <div className="flex flex-col md:flex-row md:max-w-3xl rounded-lg bg-white shadow-lg">
            <img
              className=" w-full h-96 md:h-auto object-contain md:object-cover md:w-56 rounded-t-lg md:rounded-none md:rounded-l-lg"
              src="https://res.cloudinary.com/dl6flp50k/image/upload/v1681725226/pokemon/pikachu-gaf6695d6c_1280_qzacpf.jpg"
              alt=""
            />
            <div className="p-6 flex flex-col justify-start">
              <h5 className="text-gray-900 text-4xl font-medium mb-4 text-center">
                Pokemon
              </h5>
              <p className="text-gray-700 text-base mb-4">
                <Translate id="Pokemon_v2_text" />
              </p>
              <h3 className="text-gray-900 text-lg font-medium mb-2">
                <Translate id="Pokemon_v2_title" />
              </h3>
              <ol className="text-gray-700 text-base mb-4 ml-4">
                <li className="list-disc">
                  <Translate id="Pokemon_v2_li1" />
                </li>{" "}
                <br />
                <li className="list-disc">
                  <Translate id="Pokemon_v2_li2" />
                </li>
              </ol>
              <p className="text-gray-900 text-lg font-medium mb-2">
                <Translate id="ProjetEnCours" />
              </p>

              <div className=" pb-5 border-b-2"></div>
              <div className="flex flex-row justify-center space-x-14 pt-3">
                <div className="flex flex-row justify-center space-x-14 pt-3">
                  <a
                    href="https://github.com/PrissGitHubGon/pokemon_V2"
                    className="text-white-800 text-2xl md:text-4xl"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-github ml-3 md:ml-1 "></i>
                    <p className="text-center text-sm">GitHub</p>
                  </a>
                </div>
                <div className="flex flex-row justify-center space-x-14 pt-3">
                  <a
                    href="https://pokemon-project-v2.netlify.app/"
                    className="text-white-800 text-2xl md:text-4xl"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-internet-explorer ml-3 md:ml-1 text-amber-500"></i>
                    <p className="text-center text-sm text-amber-500">
                      En cours
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DirectionalArrow rightLink="/netflix" rightTitle="Netflix" />
    </>
  );
};

export default PokemonV2;
