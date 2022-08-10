import React from "react";
import Card from "../components/Card";

function Deliveroo() {
  return (
    <div href="/projets-formation" className="cursor-pointer">
      <div className="w-full md:w-full lg:w-full flex justify-center  sm:pb-80 md:mt-10 ">
        <Card
          images="https://f.roocdn.com/images/menu_items/1583350/item-image.jpg"
          titleh5="Deliveroo"
          text="Lors de mes 10 semaines de Bootcamp dans l'école de formation Le Reacteur, j'ai eu comme exercice la réalisation de la maquette Deliveroo."
          text2="Lors de cet exercice :"
          li1="J'ai créer un projet Express dans lequel j'ai ajouter un fichier 'index.js' pour y coller le JSON fourni dans la route '/' et je l'ai héberger sur Heroku."
          li2="J'ai mis en place la récupération des données de l'API et de la feuille de styles pour afficher la liste des menus sur la page."
          li3="Grâce aux changements d'états, j'ai créez le panier qui affiche les commandes sélectionné."
          titleh3="Modification à venir :  "
          text3="Intégrer la responsive avec Tailwind ou Bootstrap / Modifer le panier afin qu'il affiche le montant de la commande."
          gitHub="GitHub"
          gitHubLink="https://github.com/PrissGitHubGon/deliveroo-front-end"
          classNameWebSite="hidden"
        />
      </div>
      <div className="flex justify-between">
        <a href="/vinted">
          <i className="fa-regular fa-hand-point-left text-4xl pl-5 bg-clip-text text-transparent bg-gradient-to-r from-red-900 via-orange-800 to-amber-700  hover:text-green-900 "></i>
          <p className="text-center pl-4 italic bg-clip-text text-transparent bg-gradient-to-r from-red-900 via-orange-800 to-amber-700 font-bold">
            Vinted
          </p>
        </a>
      </div>
    </div>
  );
}

export default Deliveroo;
