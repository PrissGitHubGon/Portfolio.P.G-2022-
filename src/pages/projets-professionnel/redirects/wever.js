import React from "react";
import Card from "../../../components/Card";

const Wever = () => {
  return (
    <>
      <div className="w-full md:w-full lg:w-full flex justify-center sm:pb-80 md:mt-10">
        {/* <Card
          images="https://res.cloudinary.com/dl6flp50k/image/upload/v1678803375/portefolio/logo-wever-slogan_inqn0j.svg"
          classNameImg=" w-full h-96 md:h-auto object-contain md:w-56 rounded-t-lg md:rounded-none md:rounded-l-lg"
          titleh5="Wever"
          text="J'ai réalisé un stage de 6 mois dans la startup wever Basé à sophia Antipolis. "
          text1="J'ai réalisé un stage de 6 mois dans la startup wever Basé à sophia Antipolis. "
          text2="Lors de cet exercice je devais :"
          li1="Créez un site en React (avec un routeur) qui contiendrait en haut : le logo MARVEL et un menu (personnages, comics, favoris)."
          li2="Sur la page principale « personnages », je devais faire apparaître la liste des personnages MARVEL (100 par page), sous forme de fiche (photo, nom, description). En cliquant sur chaque fiche, il doit être possible d’accéder à une page regroupant les comics liés au personnage."
          li3="Sur la page « comics », je devais faire apparaître la liste des comics MARVEL,par ordre alphabétique, sous forme de fiche (photo, titre, description)."
          siteWeb2="site web"
          siteWebLink2="https://www.wever.fr/"
          classNameWebSite="text-green-800 text-2xl md:text-4xl "
          redirectLink="https://www.linkedin.com/company/yeswever/mycompany/"
          titleRedirect="LinkedIn"
          iconRedirect="fa-brands fa-linkedin flex justify-center"
          classNameRedirect="text-sky-800 text-2xl md:text-4xl"
        /> */}
        <div className="flex justify-center ">
          <div className="flex flex-col md:flex-row md:max-w-3xl rounded-lg bg-white shadow-lg">
            <img
              className=" w-full h-96 md:h-auto object-contain md:w-56 rounded-t-lg md:rounded-none md:rounded-l-lg"
              src="https://res.cloudinary.com/dl6flp50k/image/upload/v1678803375/portefolio/logo-wever-slogan_inqn0j.svg"
              alt=""
            />
            <div className="p-6 flex flex-col justify-start">
              <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                <div className="animate-pulse flex space-x-4">
                  <div className="rounded-full bg-slate-200 h-10 w-10"></div>
                  <div className="flex-1 space-y-6 py-1">
                    <div className="h-2 bg-slate-200 rounded"></div>
                    <div className="space-y-3">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                        <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                      </div>
                      <div className="h-2 bg-slate-200 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <a href="/projets-formation">
          <i className="fa-regular fa-hand-point-left text-4xl pl-5 bg-clip-text text-transparent bg-gradient-to-r from-red-900 via-orange-800 to-amber-700  hover:text-green-900 "></i>
          <p className="text-center pl-4 italic bg-clip-text text-transparent bg-gradient-to-r from-red-900 via-orange-800 to-amber-700 font-bold">
            Projets
          </p>
        </a>
        <a href="/vinted">
          <i className="fa-regular fa-hand-point-right text-4xl pr-5 bg-clip-text text-transparent bg-gradient-to-r from-red-900 via-orange-800 to-amber-700  hover:text-green-900 "></i>
          <p className="text-center pr-6 italic bg-clip-text text-transparent bg-gradient-to-r from-red-900 via-orange-800 to-amber-700 font-bold ">
            Vinted
          </p>
        </a>
      </div>
    </>
  );
};

export default Wever;
