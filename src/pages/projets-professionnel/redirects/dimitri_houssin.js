import React from "react";
import { Translate } from "react-localize-alias";
import DirectionalArrow from "../../../components/components/Directional_arrow";

const DimitriHoussin = () => {
  return (
    <>
      <div className="w-full md:w-full lg:w-full flex justify-center sm:pb-80 md:mt-10">
        <div className="flex justify-center">
          <div className="flex flex-col md:flex-row md:max-w-3xl rounded-lg bg-white shadow-lg">
            <img
              className=" w-full h-96 md:h-auto object-cover md:w-56 rounded-t-lg md:rounded-none md:rounded-l-lg"
              src="https://res.cloudinary.com/dl6flp50k/image/upload/v1681034630/portefolio/e-commerce-g337e0da42_1920_ksbkj0.jpg"
              alt=""
            />
            <div className="p-6 flex flex-col justify-start">
              <h5 className="text-gray-900 text-4xl font-medium mb-4 text-center">
                Dimitri Houssin - FreeLance
              </h5>
              <p className="text-gray-700 text-base mb-4">
                <Translate id="Dimitri_Houssin_text" />
              </p>
              <p className="text-gray-700 text-base mb-4">
                <Translate id="Dimitri_Houssin_text2" />
              </p>
              <p className="text-gray-700 text-base mb-4">
                <Translate id="Dimitri_Houssin_text3" />
              </p>
              <p className="text-gray-700 text-base mb-4">
                <Translate id="Dimitri_Houssin_text4" />
              </p>
              <p className="text-gray-700 text-base mb-4">
                <Translate id="Dimitri_Houssin_text5" />
              </p>
              <p className="text-gray-700 text-base mb-4">
                <Translate id="Dimitri_Houssin_text6" />
              </p>

              <div className="flex flex-row justify-center space-x-14 pt-3">
                <a
                  href="https://www.linkedin.com/in/dimitri-houssin-007232138/"
                  className="text-sky-800 text-2xl md:text-4xl"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-linkedin flex justify-center "></i>
                  <p className="text-center text-sm">Dimitri Houssin</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DirectionalArrow
        rightLink="/wever"
        rightTitle="wever"
        // leftLink="/netflix"
        // leftTitle="Netflix"
      />
    </>
  );
};

export default DimitriHoussin;
