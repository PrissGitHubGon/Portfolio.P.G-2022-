import React from "react";

function Vinted() {
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
                Lors de mes 10 semaines de Bootcamp dans l'école de formation
                "Le Reacteur", j'ai eu comme exercice la réalisation de la
                maquette Vinted.
              </p>
              <p className="text-gray-900 text-lg font-medium mb-2">
                J'ai réalisé lors du module back-end une Api permettant :
              </p>

              <ol className="text-gray-700 text-base mb-4 ">
                <li className="list-disc">
                  La Connexion & L'Inscription sur le site{" "}
                </li>{" "}
                <br />
                <li className="list-disc">
                  La possibilité de poster une Annonce seulement après connexion
                  sur le site.
                </li>
                <br />
              </ol>
              <p className="text-gray-900 text-lg font-medium mb-2">
                J'ai réalisé lors du module Front-end :
              </p>

              <ol className="text-gray-700 text-base mb-4 ">
                <li className="list-disc">
                  Les formulaires de connexion et d'Inscription
                </li>{" "}
                <br />
                <li className="list-disc">
                  Le formulaire pour poster une annonce
                </li>
                <br />
                <li className="list-disc">
                  La connexion entre le front-end et l'API afin d'afficher
                  toutes les Annonces créer, stocké en BDD.
                </li>
              </ol>
              <h3 className="text-gray-900 text-lg font-medium mb-2">
                Modification à venir :{" "}
              </h3>
              <p className="text-gray-700 text-base pb-4 border-b-2">
                Refonte du site pour mettre en place la responsive avec Tailwind
                ou Bootstrap / Mise en place d'une pagination numéroté / Mettre
                en place le filtre "Prix" pour afficher des annonces en ordre
                croissant ou décroissant
              </p>
              <div className="flex flex-row justify-center space-x-14 pt-5">
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
}

export default Vinted;
