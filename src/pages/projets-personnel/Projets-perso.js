import React from "react";

// Data
import data from "../../assets/data/realisations.json";

const ProjetsPerso = () => {
  return (
    <div className="relative flex gap-4 overflow-hidden flex-wrap py-12 mb-16 pb-96 sm:mb-96 place-content-center">
      {data.personnel.map((realisation, index) => {
        return (
          <div className="">
            <div
              className=" text-center relative lg:w-52 lg:h-52 md:w-40 md:h-40  w-24 h-24 cursor-pointer "
              key={index}
            >
              <a
                href={realisation.link}
                className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0 "
                style={{
                  backgroundImage: `url(${realisation.imageUrl || ""})`,
                }}
              >
                <img
                  src={realisation.imageUrl || ""}
                  alt={realisation.title}
                  className="w-full aspect-square hidden"
                />
                <div className="h-full w-full aspect-square block absolute top-0 left-0 transition-opacity duration-300 opacity-0 lg:hover:opacity-100 bg-gradient-to-r from-indigo-500/75 via-purple-500/75 to-pink-500/75 z-10">
                  <h3 className="text-white py-8 lg:py-20 px-3 mx-auto lg:text-3xl text-md">
                    {realisation.title}
                  </h3>
                </div>{" "}
              </a>
            </div>{" "}
            <h3 className="text-black text-center lg:hidden satisfyFont  mx-auto lg:text-3xl text-xl ">
              {realisation.title}
            </h3>
          </div>
        );
      })}
    </div>
  );
};

export default ProjetsPerso;
