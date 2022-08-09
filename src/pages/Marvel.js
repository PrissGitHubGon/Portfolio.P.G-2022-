import React from "react";
import Card from "../components/Card";
// import Iframe from "react-iframe";
function Marvel() {
  return (
    <a href="/projets-formation" className="cursor-pointer">
      <div className="w-full md:w-full lg:w-full flex justify-center sm:pb-80 md:mt-10">
        {/* <Iframe
          url="https://embed.lottiefiles.com/animation/93663"
          id="myId"
          className="lottie"
          display="initial"
          position="relative"
        /> */}
        <Card
          images="https://res.cloudinary.com/dl6flp50k/image/upload/v1659953418/gabriel-2519793_960_720_jnbquh.webp"
          titleh5="Marvel"
          text="Lors de mes 10 semaines de Bootcamp dans l'école de formation Le Reacteur, j'ai eu comme Test technique la réalisation du site Marvel."
          text2="Lors de cet excercice je devais :"
          li1="Créez un site en React (avec un routeur) qui contiendrait en haut : le logo MARVEL et un menu (personnages, comics, favoris)."
          li2="Sur la page principale « personnages », je devais faire apparaître la liste des personnages MARVEL (100 par page), sous forme de fiche (photo, nom, description). En cliquant sur chaque fiche, il doit être possible d’accéder à une page regroupant les comics liés au personnage."
          li3="Sur la page « comics », je devais faire apparaître la liste des comics MARVEL,par ordre alphabétique, sous forme de fiche (photo, titre, description)."
          titleh3="Modification à venir :  "
          text3="Intégrer la responsive / Intégrer un moteur de recherche, afin de rechercher par nom & titre / Créer un système permettant de mettre chaque fiche en favoris, en fonction des souhaits de l’utilisateur. /  Créez un système d’authentification par email et mot de passe."
          gitHub="GitHub"
          gitHubLink="https://github.com/PrissGitHubGon/marvel-frontend"
          siteWeb2="Site en cours"
          siteWebLink2="https://marvel-student-lereacteur.netlify.app/"
        />
      </div>
    </a>
  );
}

export default Marvel;
