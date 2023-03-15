import React from "react";
import Card from "../../../components/Card";
// import Iframe from "react-iframe";
function Marvel() {
  return (
    <>
      <div className="w-full md:w-full lg:w-full flex justify-center sm:pb-80 md:mt-10">
        <Card
          images="https://res.cloudinary.com/dl6flp50k/image/upload/v1659953418/gabriel-2519793_960_720_jnbquh.webp"
          titleh5="Marvel"
          text="Lors de mes 10 semaines de Bootcamp dans l'école de formation Le Reacteur, j'ai eu comme Test technique la réalisation du site Marvel."
          text2="Lors de cet exercice je devais :"
          li1="Créez un site en React (avec un routeur) qui contiendrait en haut : le logo MARVEL et un menu (personnages, comics, favoris)."
          li2="Sur la page principale « personnages », je devais faire apparaître la liste des personnages MARVEL (100 par page), sous forme de fiche (photo, nom, description). En cliquant sur chaque fiche, il doit être possible d’accéder à une page regroupant les comics liés au personnage."
          li3="Sur la page « comics », je devais faire apparaître la liste des comics MARVEL,par ordre alphabétique, sous forme de fiche (photo, titre, description)."
          titleh3="Modification à venir :  "
          text3="Intégrer la responsive avec Tailwind  /  Créez un système d’authentification par email et mot de passe fonctionnel / ❗❗ Réparer l'erreur : blocked by CORS policy: No 'Access-Control-Allow-Origin' - afin d'utiliser la bonne API ."
          gitHub="GitHub"
          gitHubLink="https://github.com/PrissGitHubGon/marvel-frontend"
          siteWeb2="Aperçu"
          siteWebLink2="https://marvel-student-lereacteur.netlify.app/"
          classNameWebSite="text-green-800 text-2xl md:text-4xl"
        />
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
}

export default Marvel;
