import React from "react";
// Data
import data from "../assets/data/competences.json";
function Competences() {
  return (
    <div className="relative flex gap-4 overflow-hidden flex-wrap lg:py-12 py-4 sm:pb-72   md:pb-32 pb-44   place-content-center">
      {data.competences.map((competence, index) => {
        return (
          <div
            key={index}
            className=" text-center relative lg:w-52 lg:h-52 md:w-40 md:h-40   rounded-md w-24 h-24"
          >
            <a
              href={competence.link}
              className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
              style={{ backgroundImage: `url(${competence.imageUrl || ""})` }}
            >
              <img
                src={competence.imageUrl || ""}
                alt={competence.title}
                className="w-full aspect-square hidden"
              />
            </a>
            <div className="h-full w-full aspect-square block absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-100 bg-gradient-to-r from-indigo-500/75 via-purple-500/75 to-pink-500/75 z-10">
              <h3 className="text-white py-8 lg:py-20 px-3 mx-auto lg:text-3xl text-md">
                {competence.title}
              </h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Competences;
